(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[288],{69532:function(t){t.exports=function(t,e){var i=e.prototype,s=i.format;i.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return s.bind(this)(t);var n=this.$utils(),r=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return i.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return i.ordinal(e.week(),"W");case"w":case"ww":return n.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return n.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return n.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return s.bind(this)(r)}}},89017:function(t){var e,i,s,n,r,o,c,l,d,u,h,f,y;t.exports=(e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,c={},l=function(t){return(t=+t)+(t>68?1900:2e3)},d=function(t){return function(e){this[t]=+e}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t||"Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),i=60*e[1]+(+e[2]||0);return 0===i?0:"+"===e[0]?-i:i}(t)}],h=function(t){var e=c[t];return e&&(e.indexOf?e:e.s.concat(e.f))},f=function(t,e){var i,s=c.meridiem;if(s){for(var n=1;n<=24;n+=1)if(t.indexOf(s(n,0,e))>-1){i=n>12;break}}else i=t===(e?"pm":"PM");return i},y={A:[o,function(t){this.afternoon=f(t,!1)}],a:[o,function(t){this.afternoon=f(t,!0)}],Q:[s,function(t){this.month=3*(t-1)+1}],S:[s,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,d("seconds")],ss:[r,d("seconds")],m:[r,d("minutes")],mm:[r,d("minutes")],H:[r,d("hours")],h:[r,d("hours")],HH:[r,d("hours")],hh:[r,d("hours")],D:[r,d("day")],DD:[n,d("day")],Do:[o,function(t){var e=c.ordinal,i=t.match(/\d+/);if(this.day=i[0],e)for(var s=1;s<=31;s+=1)e(s).replace(/\[|\]/g,"")===t&&(this.day=s)}],w:[r,d("week")],ww:[n,d("week")],M:[r,d("month")],MM:[n,d("month")],MMM:[o,function(t){var e=h("months"),i=(h("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(i<1)throw Error();this.month=i%12||i}],MMMM:[o,function(t){var e=h("months").indexOf(t)+1;if(e<1)throw Error();this.month=e%12||e}],Y:[/[+-]?\d+/,d("year")],YY:[n,function(t){this.year=l(t)}],YYYY:[/\d{4}/,d("year")],Z:u,ZZ:u},function(t,s,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(l=t.parseTwoDigitYear);var r=s.prototype,o=r.parse;r.parse=function(t){var s=t.date,r=t.utc,l=t.args;this.$u=r;var d=l[1];if("string"==typeof d){var u=!0===l[2],h=!0===l[3],f=l[2];h&&(f=l[2]),c=this.$locale(),!u&&f&&(c=n.Ls[f]),this.$d=function(t,s,n,r){try{if(["x","X"].indexOf(s)>-1)return new Date(("X"===s?1e3:1)*t);var o=(function(t){var s,n;s=t,n=c&&c.formats;for(var r=(t=s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(t,i,s){var r=s&&s.toUpperCase();return i||n[s]||e[s]||n[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,i){return e||i.slice(1)})})).match(i),o=r.length,l=0;l<o;l+=1){var d=r[l],u=y[d],h=u&&u[0],f=u&&u[1];r[l]=f?{regex:h,parser:f}:d.replace(/^\[|\]$/g,"")}return function(t){for(var e={},i=0,s=0;i<o;i+=1){var n=r[i];if("string"==typeof n)s+=n.length;else{var c=n.regex,l=n.parser,d=t.slice(s),u=c.exec(d)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var i=t.hours;e?i<12&&(t.hours+=12):12===i&&(t.hours=0),delete t.afternoon}}(e),e}})(s)(t),l=o.year,d=o.month,u=o.day,h=o.hours,f=o.minutes,k=o.seconds,m=o.milliseconds,p=o.zone,g=o.week,b=new Date,T=u||(l||d?1:b.getDate()),x=l||b.getFullYear(),v=0;l&&!d||(v=d>0?d-1:b.getMonth());var w,_=h||0,W=f||0,$=k||0,D=m||0;return p?new Date(Date.UTC(x,v,T,_,W,$,D+60*p.offset*1e3)):n?new Date(Date.UTC(x,v,T,_,W,$,D)):(w=new Date(x,v,T,_,W,$,D),g&&(w=r(w).week(g).toDate()),w)}catch(t){return new Date("")}}(s,d,r,n),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),(u||h)&&s!=this.format(d)&&(this.$d=new Date("")),c={}}else if(d instanceof Array)for(var k=d.length,m=1;m<=k;m+=1){l[1]=d[m-1];var p=n.apply(this,l);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===k&&(this.$d=new Date(""))}else o.call(this,t)}})},35140:function(t){t.exports=function(t,e,i){var a=function(t){return t.add(4-t.isoWeekday(),"day")},s=e.prototype;s.isoWeekYear=function(){return a(this).year()},s.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),"day");var e,s,n,r=a(this),o=(e=this.isoWeekYear(),n=4-(s=(this.$u?i.utc:i)().year(e).startOf("year")).isoWeekday(),s.isoWeekday()>4&&(n+=7),s.add(n,"day"));return r.diff(o,"week")+1},s.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var n=s.startOf;s.startOf=function(t,e){var i=this.$utils(),s=!!i.u(e)||e;return"isoweek"===i.p(t)?s?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):n.bind(this)(t,e)}}},20288:function(t,e,i){"use strict";i.d(e,{diagram:function(){return tL}});var s,n,r,o=i(21434),c=i(48721),l=i(41417),d=i(74548),u=i(35140),h=i(89017),f=i(69532),y=i(41632),k=function(){var t=(0,c.eW)(function(t,e,i,s){for(i=i||{},s=t.length;s--;i[t[s]]=e);return i},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],s=[1,27],n=[1,28],r=[1,29],o=[1,30],l=[1,31],d=[1,32],u=[1,33],h=[1,34],f=[1,9],y=[1,10],k=[1,11],m=[1,12],p=[1,13],g=[1,14],b=[1,15],T=[1,16],x=[1,19],v=[1,20],w=[1,21],_=[1,22],W=[1,23],$=[1,25],D=[1,35],C={trace:(0,c.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,c.eW)(function(t,e,i,s,n,r,o){var c=r.length-1;switch(n){case 1:return r[c-1];case 2:case 6:case 7:this.$=[];break;case 3:r[c-1].push(r[c]),this.$=r[c-1];break;case 4:case 5:this.$=r[c];break;case 8:s.setWeekday("monday");break;case 9:s.setWeekday("tuesday");break;case 10:s.setWeekday("wednesday");break;case 11:s.setWeekday("thursday");break;case 12:s.setWeekday("friday");break;case 13:s.setWeekday("saturday");break;case 14:s.setWeekday("sunday");break;case 15:s.setWeekend("friday");break;case 16:s.setWeekend("saturday");break;case 17:s.setDateFormat(r[c].substr(11)),this.$=r[c].substr(11);break;case 18:s.enableInclusiveEndDates(),this.$=r[c].substr(18);break;case 19:s.TopAxis(),this.$=r[c].substr(8);break;case 20:s.setAxisFormat(r[c].substr(11)),this.$=r[c].substr(11);break;case 21:s.setTickInterval(r[c].substr(13)),this.$=r[c].substr(13);break;case 22:s.setExcludes(r[c].substr(9)),this.$=r[c].substr(9);break;case 23:s.setIncludes(r[c].substr(9)),this.$=r[c].substr(9);break;case 24:s.setTodayMarker(r[c].substr(12)),this.$=r[c].substr(12);break;case 27:s.setDiagramTitle(r[c].substr(6)),this.$=r[c].substr(6);break;case 28:this.$=r[c].trim(),s.setAccTitle(this.$);break;case 29:case 30:this.$=r[c].trim(),s.setAccDescription(this.$);break;case 31:s.addSection(r[c].substr(8)),this.$=r[c].substr(8);break;case 33:s.addTask(r[c-1],r[c]),this.$="task";break;case 34:this.$=r[c-1],s.setClickEvent(r[c-1],r[c],null);break;case 35:this.$=r[c-2],s.setClickEvent(r[c-2],r[c-1],r[c]);break;case 36:this.$=r[c-2],s.setClickEvent(r[c-2],r[c-1],null),s.setLink(r[c-2],r[c]);break;case 37:this.$=r[c-3],s.setClickEvent(r[c-3],r[c-2],r[c-1]),s.setLink(r[c-3],r[c]);break;case 38:this.$=r[c-2],s.setClickEvent(r[c-2],r[c],null),s.setLink(r[c-2],r[c-1]);break;case 39:this.$=r[c-3],s.setClickEvent(r[c-3],r[c-1],r[c]),s.setLink(r[c-3],r[c-2]);break;case 40:this.$=r[c-1],s.setLink(r[c-1],r[c]);break;case 41:case 47:this.$=r[c-1]+" "+r[c];break;case 42:case 43:case 45:this.$=r[c-2]+" "+r[c-1]+" "+r[c];break;case 44:case 46:this.$=r[c-3]+" "+r[c-2]+" "+r[c-1]+" "+r[c]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:s,14:n,15:r,16:o,17:l,18:d,19:18,20:u,21:h,22:f,23:y,24:k,25:m,26:p,27:g,28:b,29:T,30:x,31:v,33:w,35:_,36:W,37:24,38:$,40:D},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:i,13:s,14:n,15:r,16:o,17:l,18:d,19:18,20:u,21:h,22:f,23:y,24:k,25:m,26:p,27:g,28:b,29:T,30:x,31:v,33:w,35:_,36:W,37:24,38:$,40:D},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:(0,c.eW)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,c.eW)(function(t){var e=this,i=[0],s=[],n=[null],r=[],o=this.table,l="",d=0,u=0,h=0,f=r.slice.call(arguments,1),y=Object.create(this.lexer),k={yy:{}};for(var m in this.yy)Object.prototype.hasOwnProperty.call(this.yy,m)&&(k.yy[m]=this.yy[m]);y.setInput(t,k.yy),k.yy.lexer=y,k.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var p=y.yylloc;r.push(p);var g=y.options&&y.options.ranges;function lex(){var t;return"number"!=typeof(t=s.pop()||y.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof k.yy.parseError?this.parseError=k.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,c.eW)(function(t){i.length=i.length-2*t,n.length=n.length-t,r.length=r.length-t},"popStack"),(0,c.eW)(lex,"lex");for(var b,T,x,v,w,_,W,$,D,C={};;){if(x=i[i.length-1],this.defaultActions[x]?v=this.defaultActions[x]:(null==b&&(b=lex()),v=o[x]&&o[x][b]),void 0===v||!v.length||!v[0]){var S="";for(_ in D=[],o[x])this.terminals_[_]&&_>2&&D.push("'"+this.terminals_[_]+"'");S=y.showPosition?"Parse error on line "+(d+1)+":\n"+y.showPosition()+"\nExpecting "+D.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(d+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(S,{text:y.match,token:this.terminals_[b]||b,line:y.yylineno,loc:p,expected:D})}if(v[0]instanceof Array&&v.length>1)throw Error("Parse Error: multiple actions possible at state: "+x+", token: "+b);switch(v[0]){case 1:i.push(b),n.push(y.yytext),r.push(y.yylloc),i.push(v[1]),b=null,T?(b=T,T=null):(u=y.yyleng,l=y.yytext,d=y.yylineno,p=y.yylloc,h>0&&h--);break;case 2:if(W=this.productions_[v[1]][1],C.$=n[n.length-W],C._$={first_line:r[r.length-(W||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(W||1)].first_column,last_column:r[r.length-1].last_column},g&&(C._$.range=[r[r.length-(W||1)].range[0],r[r.length-1].range[1]]),void 0!==(w=this.performAction.apply(C,[l,u,d,k.yy,v[1],n,r].concat(f))))return w;W&&(i=i.slice(0,-1*W*2),n=n.slice(0,-1*W),r=r.slice(0,-1*W)),i.push(this.productions_[v[1]][0]),n.push(C.$),r.push(C._$),$=o[i[i.length-2]][i[i.length-1]],i.push($);break;case 3:return!0}}return!0},"parse")},S={EOF:1,parseError:(0,c.eW)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,c.eW)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,c.eW)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,c.eW)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var s=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===s.length?this.yylloc.first_column:0)+s[s.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,c.eW)(function(){return this._more=!0,this},"more"),reject:(0,c.eW)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,c.eW)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,c.eW)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,c.eW)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,c.eW)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,c.eW)(function(t,e){var i,s,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(s=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var r in n)this[r]=n[r];return!1},"test_match"),next:(0,c.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,s,n=this._currentRules(),r=0;r<n.length;r++)if((i=this._input.match(this.rules[n[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,s=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,n[r])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,n[s]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,c.eW)(function(){return this.next()||this.lex()},"lex"),begin:(0,c.eW)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,c.eW)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,c.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,c.eW)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,c.eW)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,c.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,c.eW)(function(t,e,i,s){switch(i){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 43;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 22:return 42;case 23:this.begin("click");break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};function Parser(){this.yy={}}return C.lexer=S,(0,c.eW)(Parser,"Parser"),Parser.prototype=C,C.Parser=Parser,new Parser}();k.parser=k,d.extend(u),d.extend(h),d.extend(f);var m={friday:5,saturday:6},p="",g="",b=void 0,T="",x=[],v=[],w=new Map,_=[],W=[],$="",D="",C=["active","done","crit","milestone"],S=[],E=!1,M=!1,Y="sunday",L="saturday",A=0,I=(0,c.eW)(function(){_=[],W=[],$="",S=[],tf=0,s=void 0,n=void 0,tp=[],p="",g="",D="",b=void 0,T="",x=[],v=[],E=!1,M=!1,A=0,w=new Map,(0,c.ZH)(),Y="sunday",L="saturday"},"clear"),F=(0,c.eW)(function(t){g=t},"setAxisFormat"),O=(0,c.eW)(function(){return g},"getAxisFormat"),P=(0,c.eW)(function(t){b=t},"setTickInterval"),B=(0,c.eW)(function(){return b},"getTickInterval"),z=(0,c.eW)(function(t){T=t},"setTodayMarker"),N=(0,c.eW)(function(){return T},"getTodayMarker"),G=(0,c.eW)(function(t){p=t},"setDateFormat"),H=(0,c.eW)(function(){E=!0},"enableInclusiveEndDates"),V=(0,c.eW)(function(){return E},"endDatesAreInclusive"),j=(0,c.eW)(function(){M=!0},"enableTopAxis"),Z=(0,c.eW)(function(){return M},"topAxisEnabled"),R=(0,c.eW)(function(t){D=t},"setDisplayMode"),U=(0,c.eW)(function(){return D},"getDisplayMode"),q=(0,c.eW)(function(){return p},"getDateFormat"),Q=(0,c.eW)(function(t){x=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),X=(0,c.eW)(function(){return x},"getIncludes"),K=(0,c.eW)(function(t){v=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),J=(0,c.eW)(function(){return v},"getExcludes"),tt=(0,c.eW)(function(){return w},"getLinks"),te=(0,c.eW)(function(t){$=t,_.push(t)},"addSection"),ti=(0,c.eW)(function(){return _},"getSections"),ts=(0,c.eW)(function(){let t=tv(),e=0;for(;!t&&e<10;)t=tv(),e++;return W=tp},"getTasks"),tn=(0,c.eW)(function(t,e,i,s){return!s.includes(t.format(e.trim()))&&(!!(i.includes("weekends")&&(t.isoWeekday()===m[L]||t.isoWeekday()===m[L]+1)||i.includes(t.format("dddd").toLowerCase()))||i.includes(t.format(e.trim())))},"isInvalidDate"),tr=(0,c.eW)(function(t){Y=t},"setWeekday"),ta=(0,c.eW)(function(){return Y},"getWeekday"),to=(0,c.eW)(function(t){L=t},"setWeekend"),tc=(0,c.eW)(function(t,e,i,s){let n,r;if(!i.length||t.manualEndTime)return;n=(n=t.startTime instanceof Date?d(t.startTime):d(t.startTime,e,!0)).add(1,"d"),r=t.endTime instanceof Date?d(t.endTime):d(t.endTime,e,!0);let[o,c]=tl(n,r,e,i,s);t.endTime=o.toDate(),t.renderEndTime=c},"checkTaskDates"),tl=(0,c.eW)(function(t,e,i,s,n){let r=!1,o=null;for(;t<=e;)r||(o=e.toDate()),(r=tn(t,i,s,n))&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,o]},"fixTaskDates"),td=(0,c.eW)(function(t,e,i){i=i.trim();let s=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==s){let t=null;for(let e of s.groups.ids.split(" ")){let i=tT(e);void 0!==i&&(!t||i.endTime>t.endTime)&&(t=i)}if(t)return t.endTime;let e=new Date;return e.setHours(0,0,0,0),e}let n=d(i,e.trim(),!0);if(n.isValid())return n.toDate();{c.cM.debug("Invalid date:"+i),c.cM.debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime())||-1e4>t.getFullYear()||t.getFullYear()>1e4)throw Error("Invalid date:"+i);return t}},"getStartDate"),tu=(0,c.eW)(function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),th=(0,c.eW)(function(t,e,i,s=!1){i=i.trim();let n=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==n){let t=null;for(let e of n.groups.ids.split(" ")){let i=tT(e);void 0!==i&&(!t||i.startTime<t.startTime)&&(t=i)}if(t)return t.startTime;let e=new Date;return e.setHours(0,0,0,0),e}let r=d(i,e.trim(),!0);if(r.isValid())return s&&(r=r.add(1,"d")),r.toDate();let o=d(t),[c,l]=tu(i);if(!Number.isNaN(c)){let t=o.add(c,l);t.isValid()&&(o=t)}return o.toDate()},"getEndDate"),tf=0,ty=(0,c.eW)(function(t){return void 0===t?"task"+(tf+=1):t},"parseId"),tk=(0,c.eW)(function(t,e){let i;i=":"===e.substr(0,1)?e.substr(1,e.length):e;let s=i.split(","),n={};getTaskTags(s,n,C);for(let t=0;t<s.length;t++)s[t]=s[t].trim();let r="";switch(s.length){case 1:n.id=ty(),n.startTime=t.endTime,r=s[0];break;case 2:n.id=ty(),n.startTime=td(void 0,p,s[0]),r=s[1];break;case 3:n.id=ty(s[0]),n.startTime=td(void 0,p,s[1]),r=s[2]}return r&&(n.endTime=th(n.startTime,p,r,E),n.manualEndTime=d(r,"YYYY-MM-DD",!0).isValid(),tc(n,p,v,x)),n},"compileData"),tm=(0,c.eW)(function(t,e){let i;i=":"===e.substr(0,1)?e.substr(1,e.length):e;let s=i.split(","),n={};getTaskTags(s,n,C);for(let t=0;t<s.length;t++)s[t]=s[t].trim();switch(s.length){case 1:n.id=ty(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:s[0]};break;case 2:n.id=ty(),n.startTime={type:"getStartDate",startData:s[0]},n.endTime={data:s[1]};break;case 3:n.id=ty(s[0]),n.startTime={type:"getStartDate",startData:s[1]},n.endTime={data:s[2]}}return n},"parseData"),tp=[],tg={},tb=(0,c.eW)(function(t,e){let i={section:$,type:$,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},s=tm(n,e);i.raw.startTime=s.startTime,i.raw.endTime=s.endTime,i.id=s.id,i.prevTaskId=n,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.order=A,A++;let r=tp.push(i);n=i.id,tg[i.id]=r-1},"addTask"),tT=(0,c.eW)(function(t){let e=tg[t];return tp[e]},"findTaskById"),tx=(0,c.eW)(function(t,e){let i={section:$,type:$,description:t,task:t,classes:[]},n=tk(s,e);i.startTime=n.startTime,i.endTime=n.endTime,i.id=n.id,i.active=n.active,i.done=n.done,i.crit=n.crit,i.milestone=n.milestone,s=i,W.push(i)},"addTaskOrg"),tv=(0,c.eW)(function(){let t=(0,c.eW)(function(t){let e=tp[t],i="";switch(tp[t].raw.startTime.type){case"prevTaskEnd":{let t=tT(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=td(void 0,p,tp[t].raw.startTime.startData))&&(tp[t].startTime=i)}return tp[t].startTime&&(tp[t].endTime=th(tp[t].startTime,p,tp[t].raw.endTime.data,E),tp[t].endTime&&(tp[t].processed=!0,tp[t].manualEndTime=d(tp[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),tc(tp[t],p,v,x))),tp[t].processed},"compileTask"),e=!0;for(let[i,s]of tp.entries())t(i),e=e&&s.processed;return e},"compileTasks"),tw=(0,c.eW)(function(t,e){let i=e;"loose"!==(0,c.nV)().securityLevel&&(i=(0,l.N)(e)),t.split(",").forEach(function(t){void 0!==tT(t)&&(t$(t,()=>{window.open(i,"_self")}),w.set(t,i))}),t_(t,"clickable")},"setLink"),t_=(0,c.eW)(function(t,e){t.split(",").forEach(function(t){let i=tT(t);void 0!==i&&i.classes.push(e)})},"setClass"),tW=(0,c.eW)(function(t,e,i){if("loose"!==(0,c.nV)().securityLevel||void 0===e)return;let s=[];if("string"==typeof i){s=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<s.length;t++){let e=s[t].trim();e.startsWith('"')&&e.endsWith('"')&&(e=e.substr(1,e.length-2)),s[t]=e}}0===s.length&&s.push(t),void 0!==tT(t)&&t$(t,()=>{o.w8.runFunc(e,...s)})},"setClickFun"),t$=(0,c.eW)(function(t,e){S.push(function(){let i=document.querySelector(`[id="${t}"]`);null!==i&&i.addEventListener("click",function(){e()})},function(){let i=document.querySelector(`[id="${t}-text"]`);null!==i&&i.addEventListener("click",function(){e()})})},"pushFun"),tD=(0,c.eW)(function(t,e,i){t.split(",").forEach(function(t){tW(t,e,i)}),t_(t,"clickable")},"setClickEvent"),tC=(0,c.eW)(function(t){S.forEach(function(e){e(t)})},"bindFunctions"),tS={getConfig:(0,c.eW)(()=>(0,c.nV)().gantt,"getConfig"),clear:I,setDateFormat:G,getDateFormat:q,enableInclusiveEndDates:H,endDatesAreInclusive:V,enableTopAxis:j,topAxisEnabled:Z,setAxisFormat:F,getAxisFormat:O,setTickInterval:P,getTickInterval:B,setTodayMarker:z,getTodayMarker:N,setAccTitle:c.GN,getAccTitle:c.eu,setDiagramTitle:c.g2,getDiagramTitle:c.Kr,setDisplayMode:R,getDisplayMode:U,setAccDescription:c.U$,getAccDescription:c.Mx,addSection:te,getSections:ti,getTasks:ts,addTask:tb,findTaskById:tT,addTaskOrg:tx,setIncludes:Q,getIncludes:X,setExcludes:K,getExcludes:J,setClickEvent:tD,setLink:tw,getLinks:tt,bindFunctions:tC,parseDuration:tu,isInvalidDate:tn,setWeekday:tr,getWeekday:ta,setWeekend:to};function getTaskTags(t,e,i){let s=!0;for(;s;)s=!1,i.forEach(function(i){let n="^\\s*"+i+"\\s*$",r=new RegExp(n);t[0].match(r)&&(e[i]=!0,t.shift(1),s=!0)})}(0,c.eW)(getTaskTags,"getTaskTags");var tE=(0,c.eW)(function(){c.cM.debug("Something is calling, setConf, remove the call")},"setConf"),tM={monday:y.Ox9,tuesday:y.YDX,wednesday:y.EFj,thursday:y.Igq,friday:y.y2j,saturday:y.LqH,sunday:y.Zyz},tY=(0,c.eW)((t,e)=>{let i=[...t].map(()=>-1/0),s=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),n=0;for(let t of s)for(let s=0;s<i.length;s++)if(t.startTime>=i[s]){i[s]=t.endTime,t.order=s+e,s>n&&(n=s);break}return n},"getMaxIntersections"),tL={parser:k,db:tS,renderer:{setConf:tE,draw:(0,c.eW)(function(t,e,i,s){let n;let o=(0,c.nV)().gantt,l=(0,c.nV)().securityLevel;"sandbox"===l&&(n=(0,y.Ys)("#i"+e));let u="sandbox"===l?(0,y.Ys)(n.nodes()[0].contentDocument.body):(0,y.Ys)("body"),h="sandbox"===l?n.nodes()[0].contentDocument:document,f=h.getElementById(e);void 0===(r=f.parentElement.offsetWidth)&&(r=1200),void 0!==o.useWidth&&(r=o.useWidth);let k=s.db.getTasks(),m=[];for(let t of k)m.push(t.type);m=checkUnique(m);let p={},g=2*o.topPadding;if("compact"===s.db.getDisplayMode()||"compact"===o.displayMode){let t={};for(let e of k)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let s=tY(t[i],e)+1;e+=s,g+=s*(o.barHeight+o.barGap),p[i]=s}}else for(let t of(g+=k.length*(o.barHeight+o.barGap),m))p[t]=k.filter(e=>e.type===t).length;f.setAttribute("viewBox","0 0 "+r+" "+g);let b=u.select(`[id="${e}"]`),T=(0,y.Xf)().domain([(0,y.VV$)(k,function(t){return t.startTime}),(0,y.Fp7)(k,function(t){return t.endTime})]).rangeRound([0,r-o.leftPadding-o.rightPadding]);function taskCompare(t,e){let i=t.startTime,s=e.startTime,n=0;return i>s?n=1:i<s&&(n=-1),n}function makeGantt(t,e,i){let n=o.barHeight,r=n+o.barGap,c=o.topPadding,l=o.leftPadding,d=(0,y.BYU)().domain([0,m.length]).range(["#00B9FA","#F95002"]).interpolate(y.JHv);drawExcludeDays(r,c,l,e,i,t,s.db.getExcludes(),s.db.getIncludes()),makeGrid(l,c,e,i),drawRects(t,r,c,l,n,d,e,i),vertLabels(r,c,l,n,d),drawToday(l,c,e,i)}function drawRects(t,i,n,r,l,d,u){let h=[...new Set(t.map(t=>t.order))],f=h.map(e=>t.find(t=>t.order===e));b.append("g").selectAll("rect").data(f).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+n-2}).attr("width",function(){return u-o.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of m.entries())if(t.type===i)return"section section"+e%o.numberSectionStyles;return"section section0"});let k=b.append("g").selectAll("rect").data(t).enter(),p=s.db.getLinks();k.append("rect").attr("id",function(t){return t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?T(t.startTime)+r+.5*(T(t.endTime)-T(t.startTime))-.5*l:T(t.startTime)+r}).attr("y",function(t,e){return t.order*i+n}).attr("width",function(t){return t.milestone?l:T(t.renderEndTime||t.endTime)-T(t.startTime)}).attr("height",l).attr("transform-origin",function(t,e){return e=t.order,(T(t.startTime)+r+.5*(T(t.endTime)-T(t.startTime))).toString()+"px "+(e*i+n+.5*l).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,s]of m.entries())t.type===s&&(i=e%o.numberSectionStyles);let s="";return t.active?t.crit?s+=" activeCrit":s=" active":t.done?s=t.crit?" doneCrit":" done":t.crit&&(s+=" crit"),0===s.length&&(s=" task"),t.milestone&&(s=" milestone "+s),"task"+(s+=i+" "+e)}),k.append("text").attr("id",function(t){return t.id+"-text"}).text(function(t){return t.task}).attr("font-size",o.fontSize).attr("x",function(t){let e=T(t.startTime),i=T(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(T(t.endTime)-T(t.startTime))-.5*l),t.milestone&&(i=e+l);let s=this.getBBox().width;return s>i-e?i+s+1.5*o.leftPadding>u?e+r-5:i+r+5:(i-e)/2+e+r}).attr("y",function(t,e){return t.order*i+o.barHeight/2+(o.fontSize/2-2)+n}).attr("text-height",l).attr("class",function(t){let e=T(t.startTime),i=T(t.endTime);t.milestone&&(i=e+l);let s=this.getBBox().width,n="";t.classes.length>0&&(n=t.classes.join(" "));let r=0;for(let[e,i]of m.entries())t.type===i&&(r=e%o.numberSectionStyles);let c="";return(t.active&&(c=t.crit?"activeCritText"+r:"activeText"+r),t.done?c=t.crit?c+" doneCritText"+r:c+" doneText"+r:t.crit&&(c=c+" critText"+r),t.milestone&&(c+=" milestoneText"),s>i-e)?i+s+1.5*o.leftPadding>u?n+" taskTextOutsideLeft taskTextOutside"+r+" "+c:n+" taskTextOutsideRight taskTextOutside"+r+" "+c+" width-"+s:n+" taskText taskText"+r+" "+c+" width-"+s});let g=(0,c.nV)().securityLevel;if("sandbox"===g){let t;t=(0,y.Ys)("#i"+e);let i=t.nodes()[0].contentDocument;k.filter(function(t){return p.has(t.id)}).each(function(t){var e=i.querySelector("#"+t.id),s=i.querySelector("#"+t.id+"-text");let n=e.parentNode;var r=i.createElement("a");r.setAttribute("xlink:href",p.get(t.id)),r.setAttribute("target","_top"),n.appendChild(r),r.appendChild(e),r.appendChild(s)})}}function drawExcludeDays(t,e,i,n,r,l,u,h){let f,y;if(0===u.length&&0===h.length)return;for(let{startTime:t,endTime:e}of l)(void 0===f||t<f)&&(f=t),(void 0===y||e>y)&&(y=e);if(!f||!y)return;if(d(y).diff(d(f),"year")>5){c.cM.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let k=s.db.getDateFormat(),m=[],p=null,g=d(f);for(;g.valueOf()<=y;)s.db.isInvalidDate(g,k,u,h)?p?p.end=g:p={start:g,end:g}:p&&(m.push(p),p=null),g=g.add(1,"d");let x=b.append("g").selectAll("rect").data(m).enter();x.append("rect").attr("id",function(t){return"exclude-"+t.start.format("YYYY-MM-DD")}).attr("x",function(t){return T(t.start)+i}).attr("y",o.gridLineStartPadding).attr("width",function(t){let e=t.end.add(1,"day");return T(e)-T(t.start)}).attr("height",r-e-o.gridLineStartPadding).attr("transform-origin",function(e,s){return(T(e.start)+i+.5*(T(e.end)-T(e.start))).toString()+"px "+(s*t+.5*r).toString()+"px"}).attr("class","exclude-range")}function makeGrid(t,e,i,n){let r=(0,y.LLu)(T).tickSize(-n+e+o.gridLineStartPadding).tickFormat((0,y.i$Z)(s.db.getAxisFormat()||o.axisFormat||"%Y-%m-%d")),c=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||o.tickInterval);if(null!==c){let t=c[1],e=c[2],i=s.db.getWeekday()||o.weekday;switch(e){case"millisecond":r.ticks(y.U8T.every(t));break;case"second":r.ticks(y.S1K.every(t));break;case"minute":r.ticks(y.Z_i.every(t));break;case"hour":r.ticks(y.WQD.every(t));break;case"day":r.ticks(y.rr1.every(t));break;case"week":r.ticks(tM[i].every(t));break;case"month":r.ticks(y.F0B.every(t))}}if(b.append("g").attr("class","grid").attr("transform","translate("+t+", "+(n-50)+")").call(r).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||o.topAxis){let i=(0,y.F5q)(T).tickSize(-n+e+o.gridLineStartPadding).tickFormat((0,y.i$Z)(s.db.getAxisFormat()||o.axisFormat||"%Y-%m-%d"));if(null!==c){let t=c[1],e=c[2],n=s.db.getWeekday()||o.weekday;switch(e){case"millisecond":i.ticks(y.U8T.every(t));break;case"second":i.ticks(y.S1K.every(t));break;case"minute":i.ticks(y.Z_i.every(t));break;case"hour":i.ticks(y.WQD.every(t));break;case"day":i.ticks(y.rr1.every(t));break;case"week":i.ticks(tM[n].every(t));break;case"month":i.ticks(y.F0B.every(t))}}b.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function vertLabels(t,e){let i=0,s=Object.keys(p).map(t=>[t,p[t]]);b.append("g").selectAll("text").data(s).enter().append(function(t){let e=t[0].split(c.SY.lineBreakRegex),i=-(e.length-1)/2,s=h.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,n]of(s.setAttribute("dy",i+"em"),e.entries())){let e=h.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=n,s.appendChild(e)}return s}).attr("x",10).attr("y",function(n,r){if(!(r>0))return n[1]*t/2+e;for(let o=0;o<r;o++)return i+=s[r-1][1],n[1]*t/2+i*t+e}).attr("font-size",o.sectionFontSize).attr("class",function(t){for(let[e,i]of m.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%o.numberSectionStyles;return"sectionTitle"})}function drawToday(t,e,i,n){let r=s.db.getTodayMarker();if("off"===r)return;let c=b.append("g").attr("class","today"),l=new Date,d=c.append("line");d.attr("x1",T(l)+t).attr("x2",T(l)+t).attr("y1",o.titleTopMargin).attr("y2",n-o.titleTopMargin).attr("class","today"),""!==r&&d.attr("style",r.replace(/,/g,";"))}function checkUnique(t){let e={},i=[];for(let s=0,n=t.length;s<n;++s)Object.prototype.hasOwnProperty.call(e,t[s])||(e[t[s]]=!0,i.push(t[s]));return i}(0,c.eW)(taskCompare,"taskCompare"),k.sort(taskCompare),makeGantt(k,r,g),(0,c.v2)(b,g,r,o.useMaxWidth),b.append("text").text(s.db.getDiagramTitle()).attr("x",r/2).attr("y",o.titleTopMargin).attr("class","titleText"),(0,c.eW)(makeGantt,"makeGantt"),(0,c.eW)(drawRects,"drawRects"),(0,c.eW)(drawExcludeDays,"drawExcludeDays"),(0,c.eW)(makeGrid,"makeGrid"),(0,c.eW)(vertLabels,"vertLabels"),(0,c.eW)(drawToday,"drawToday"),(0,c.eW)(checkUnique,"checkUnique")},"draw")},styles:(0,c.eW)(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles")}}}]);