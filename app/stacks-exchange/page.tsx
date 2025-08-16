"use client";

import { useState, useEffect } from "react";
import { useDarkMode } from "@/lib/useDarkMode";
import Link from "next/link";
import Image from "next/image";
import { Swap } from "./components/swap";
import { AddLiquidity } from "./components/add-liquidity";
import { CreatePool } from "./components/create-pool";
import { getAllPools, Pool } from "./lib/amm";
import "../page.css";
import "../shared-pages.css";

type TabType = "swap" | "pools" | "add-liquidity" | "remove-liquidity" | "create-pool";

export default function StacksExchange() {
  const { isDarkMode } = useDarkMode();
  const [activeTab, setActiveTab] = useState<TabType>("swap");
  const [pools, setPools] = useState<Pool[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPools() {
      try {
        const allPools = await getAllPools();
        setPools(allPools);
      } catch (error) {
        console.error("Error fetching pools:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPools();
  }, []);

  const tabs = [
    { id: "swap" as TabType, label: "Swap", icon: "🔄" },
    { id: "pools" as TabType, label: "Pools", icon: "💧" },
    { id: "add-liquidity" as TabType, label: "Add Liquidity", icon: "➕" },
    { id: "remove-liquidity" as TabType, label: "Remove Liquidity", icon: "➖" },
    { id: "create-pool" as TabType, label: "Create Pool", icon: "🆕" },
  ];

  const renderContent = () => {
    if (loading) {
      return (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          padding: '60px 0',
          color: 'var(--accent-color)'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid var(--accent-color)',
            borderTop: '4px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>
      );
    }

    const noPoolsMessage = (
      <div style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: 'var(--card-bg)',
        borderRadius: '8px',
        border: '2px solid var(--accent-color)',
        margin: '20px 0'
      }}>
        <p style={{ color: 'var(--dark-text)', fontSize: '1.1rem' }}>
          No pools available. Create the first pool to get started!
        </p>
      </div>
    );

    switch (activeTab) {
      case "swap":
        return pools.length > 0 ? <Swap pools={pools} /> : noPoolsMessage;
      case "pools":
        return <div>Pools feature coming soon</div>;
      case "add-liquidity":
        return pools.length > 0 ? <AddLiquidity pools={pools} /> : noPoolsMessage;
      case "remove-liquidity":
        return <div>Remove liquidity feature coming soon</div>;
      case "create-pool":
        return <CreatePool />;
      default:
        return null;
    }
  };

  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header Section */}
      <div className="header">
        <div className="header-container">
          <div className="logo">
            <Image
              src="/pasifika.png"
              alt="Pasifika"
              width={50}
              height={50}
            />
            <div className="logo-text">
              <span className="logo-accent">Pasifika</span>
            </div>
          </div>
          
          <div className="nav-menu">
            <div className="nav-item">
              <Link href="/pocs" className="nav-link-button">
                Back to POCs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        <div className="page-banner">
          <h1>Stacks Exchange AMM</h1>
        </div>
        
        <div className="content-container">
          <div className="content-section">
            {/* Introduction */}
            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
              <Image
                src="/pasifika.png"
                alt="Pasifika Stacks Exchange"
                width={120}
                height={120}
                style={{ margin: '0 auto 20px' }}
              />
              <h2 style={{ color: 'var(--accent-color)', marginBottom: '15px' }}>
                Bitcoin-Secured DeFi for the Pacific
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--dark-text)' }}>
                Decentralized Automated Market Maker built on Stacks blockchain, enabling secure token swaps, 
                liquidity provision, and DeFi services with Bitcoin-level security for the Pasifika ecosystem.
              </p>
            </div>

            {/* Tab Navigation */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              marginBottom: '30px',
              gap: '10px'
            }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '12px 20px',
                    borderRadius: '6px',
                    border: 'none',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    backgroundColor: activeTab === tab.id ? 'var(--accent-color)' : 'var(--card-bg)',
                    color: activeTab === tab.id ? 'var(--light-text)' : 'var(--dark-text)',
                    boxShadow: activeTab === tab.id ? '0 4px 15px rgba(255, 87, 34, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.backgroundColor = 'var(--orange-light)';
                      e.currentTarget.style.color = 'var(--light-text)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                      e.currentTarget.style.color = 'var(--dark-text)';
                    }
                  }}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            
            {/* Content */}
            <div style={{ marginBottom: '40px' }}>
              {renderContent()}
            </div>
            
            {/* Stats */}
            {!loading && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
                marginTop: '40px'
              }}>
                <div style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '25px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: '2px solid var(--accent-color)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: 'var(--accent-color)',
                    margin: '0 0 10px 0'
                  }}>
                    {pools.length}
                  </h3>
                  <p style={{ color: 'var(--dark-text)', margin: 0 }}>Active Pools</p>
                </div>
                
                <div style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '25px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: '2px solid var(--orange-light)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: 'var(--orange-light)',
                    margin: '0 0 10px 0'
                  }}>
                    {pools.reduce((sum, pool) => sum + pool.liquidity, 0).toLocaleString()}
                  </h3>
                  <p style={{ color: 'var(--dark-text)', margin: 0 }}>Total Liquidity</p>
                </div>
                
                <div style={{
                  backgroundColor: 'var(--card-bg)',
                  padding: '25px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: '2px solid var(--accent-color)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: 'var(--accent-color)',
                    margin: '0 0 10px 0'
                  }}>
                    {pools.reduce((sum, pool) => sum + Number(pool["balance-0"]) + Number(pool["balance-1"]), 0).toLocaleString()}
                  </h3>
                  <p style={{ color: 'var(--dark-text)', margin: 0 }}>Total Value Locked</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="footer-banner">
        <p>Copyright &copy; Pasifika 2025</p>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
