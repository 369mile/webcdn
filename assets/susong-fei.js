function showMessage()
    {
if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==1)
 {document.form1.textarea.value="说明：其他非财产案件每件交纳50元至100元。省、自治区、直辖市人民政府可以结合本地实际情况在规定的幅度内制定具体交纳标准。";}
if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==2)
 {document.form1.textarea.value="说明：劳动争议案件每件交纳10元。";}
 if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==3)
 {document.form1.textarea.value="说明：商标、专利、海事行政案件每件交纳100元。";}
if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==4)
 {document.form1.textarea.value="说明：其他行政案件每件交纳50元。";} 
 if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==5)
 {document.form1.textarea.value="说明：当事人提出案件管辖权异议，异议不成立的，每件交纳50元至100元。省、自治区、直辖市人民政府可以结合本地实际情况在规定的幅度内制定具体交纳标准。";}
 if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==6)
 {document.form1.textarea.value="说明：依法申请公示催告的，每件交纳100元。";}
 if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==7)
 {document.form1.textarea.value="说明：申请撤销仲裁裁决或者认定仲裁协议效力的，每件交纳400元。";}
 if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==8)
 {document.form1.textarea.value="说明：申请设立海事赔偿责任限制基金的，每件交纳1000元至1万元。";}
 if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==9)
 {document.form1.textarea.value="说明：申请海事强制令的，每件交纳1000元至5000元。";}
 if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==10)
 {document.form1.textarea.value="说明：申请船舶优先权催告的，每件交纳1000元至5000元。";}
 if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==11)
 {document.form1.textarea.value="说明：申请海事债权登记的，每件交纳1000元。";}
 if(document.getElementById("select").options[document.getElementById("select").selectedIndex].value==12)
 {document.form1.textarea.value="说明：申请共同海损理算的，每件交纳1000元。";}
 }

function shou()
 {
if(document.getElementById("r1").checked)
{var result=0;
var shuru=document.form1.textfield.value;
if ((shuru>0)&&(shuru<=10000)){
result=50;
}
else if ((shuru>10000)&&(shuru<=100000)){
result=shuru*0.025-200;
}
else if ((shuru>100000)&&(shuru<=200000)){
result=shuru*0.02+300
}
else if ((shuru>200000)&&(shuru<=500000)){
result=shuru*0.015+1300
}
else if ((shuru>500000)&&(shuru<=1000000)){
result=shuru*0.01+3800
}
else if ((shuru>1000000)&&(shuru<=2000000)){
result=shuru*0.009+4800
}
else if ((shuru>2000000)&&(shuru<=5000000)){
result=shuru*0.008+6800
}
else if ((shuru>5000000)&&(shuru<=10000000)){
result=shuru*0.007+11800
}
else if ((shuru>10000000)&&(shuru<=20000000)){
result=shuru*0.006+21800
}
else if (shuru>20000000){
result=shuru*0.005+41800
}
document.form1.textarea.value="说明：财产案件根据诉讼请求的金额或者价额，按照下列比例分段累计交纳：1.不超过1万元的，每件交纳50元；2.超过1万元至10万元的部分，按照2.5％交纳；3.超过10万元至20万元的部分，按照2％交纳；4.超过20万元至50万元的部分，按照1.5％交纳；5.超过50万元至100万元的部分，按照1％交纳；6.超过100万元至200万元的部分，按照0.9％交纳；7.超过200万元至500万元的部分，按照0.8％交纳；8.超过500万元至1000万元的部分，按照0.7％交纳；9.超过1000万元至2000万元的部分，按照0.6％交纳；10.超过2000万元的部分，按照0.5％交纳。";
document.form1.textfield2.value=result.toFixed(2);}
else
{
var shuru=document.form1.textfield2.value;
if (shuru<50){
result="诉讼费不足"
}
else if (shuru==50){
result="标的额<=10000元"
}
else if ((shuru>50)&&(shuru<=2300))
{
result=(shuru*1+200)/0.025;
}
else if ((shuru>2300)&&(shuru<=4300)){
result=(shuru-300)/0.02;
}
else if ((shuru>4300)&&(shuru<=8800)){
result=(shuru-1300)/0.015
}
else if ((shuru>8800)&&(shuru<=13800)){
result=(shuru-3800)/0.01
}
else if ((shuru>13800)&&(shuru<=22800)){
result=(shuru-4800)/0.009
}
else if ((shuru>22800)&&(shuru<=46800)){
result=(shuru-6800)/0.008
}
else if ((shuru>46800)&&(shuru<=81800)){
result=(shuru-11800)/0.007
}
else if ((shuru>81800)&&(shuru<=141800)){
result=(shuru-21800)/0.006
}
else if (shuru>141800){
result=(shuru-41800)/0.005
}
document.form1.textfield.value=result
document.form1.textarea.value="你选了反算财产受理标的额";
}
} 

function bao(){
if(document.getElementById("r1").checked){
var result=0;
var shuru=document.form1.textfield.value;
if ((shuru>0)&&(shuru<=1000)){
result=30
}
else if ((shuru>1000)&&(shuru<=100000)){
result=shuru*0.01+20
}
else if (shuru>100000){
result=shuru*0.005+520
}
if ((result>=5000)){
result=5000
}
document.form1.textfield2.value=result.toFixed(2);
document.form1.textarea.value="说明：财产保全数额不超过1000元或者不涉及财产数额的，每件交纳30元；超过1000元至10万元的部分，按照1%交纳；超过10万元的部分，按照0.5％交纳。但是，当事人申请保全措施交纳的费用最多不超过5000元。";
}
else{
var shuru=document.form1.textfield2.value;
if (shuru<30)
{
result="诉讼费不足"
}
else if (shuru==30)
{
result="标的额<=1000元"
}
else if ((shuru>30)&&(shuru<=1020))
{
result=(shuru*1-20)/0.01
}
else if ((shuru>1020)&&(shuru<5000))
{
result=(shuru*1-520)/0.005
}
else if (shuru==5000){
result="标的额不受限制"
}
else if (shuru>5000){
result="保全费最高5000元"
}
document.form1.textfield.value=result
document.form1.textarea.value="说明：你选了反算保全申请标的额";}
}


function zhi(){
if(document.getElementById("r1").checked){
var result="50—500";
var shuru=document.form1.textfield.value;
if ((shuru>0)&&(shuru<10000)){
result=50
}
else if ((shuru>=10000)&&(shuru<=500000)){
result=shuru*0.015-100
}
else if ((shuru>=500000)&&(shuru<=5000000)){
result=shuru*0.01+2400
}
else if ((shuru>=5000000)&&(shuru<=10000000)){
result=shuru*0.005+27400
}
else if (shuru>10000000){
result=shuru*0.001+67400
}
if (result!=="50—500"){
result=result.toFixed(2)
}
document.form1.textfield2.value=result;
document.form1.textarea.value="说明：执行费申请人不预交，由被申请人交纳。没有执行金额或者价额的，每件交纳50元至500元。执行金额或者价额不超过1万元的，每件交纳50元；超过1万元至50万元的部分，按照1.5％交纳；超过50万元至500万元的部分，按照1％交纳；超过500万元至1000万元的部分，按照0.5％交纳；超过1000万元的部分,按照0.1％交纳。";
}
else{
document.form1.textarea.value="说明：该项不支持反算标的额，执行费无需预交，不用反算";
}
}
function lihun(){
if(document.getElementById("r1").checked)
{
var slf2=0
var bde2=document.form1.textfield.value
if (bde2<=200000)
{
slf2="50—300"
}
else if (bde2>200000)
{
slf2_1=(bde2-200000)*0.005
slf2=slf2_1.toFixed(2)+"+(50—300)"
}
document.form1.textfield2.value=slf2;
document.form1.textarea.value="说明：离婚案件每件交纳50元至300元。涉及财产分割，财产总额不超过20万元的，不另行交纳；超过20万元的部分，按照0.5％交纳。省、自治区、直辖市人民政府可以结合本地实际情况在规定的幅度内制定具体交纳标准。";
}
else{document.form1.textarea.value="说明：地方标准不统一，因此该项不支持反算标的额";}
}

function renge(){
if(document.getElementById("r1").checked)
{
var slf2=0
var bde2=document.form1.textfield.value
if (bde2<=50000)
{
slf2="100—500"
}
else if ((bde2>50000)&&(bde2<=100000))
{
slf_1=(bde2-50000)*0.01
slf2=slf_1.toFixed(2)+"+(100—500)"
}
else if (bde2>100000)
{
slf_1=(bde2-100000)*0.005+500
slf2=slf_1.toFixed(2)+"+(100—500)"
}
document.form1.textfield2.value=slf2;
document.form1.textarea.value="说明：侵害姓名权、名称权、肖像权、名誉权、荣誉权以及其他人格权的案件，每件交纳100元至500元。涉及损害赔偿，赔偿金额不超过5万元的，不另行交纳；超过5万元至10万元的部分，按照1％交纳；超过10万元的部分，按照0.5％交纳。省、自治区、直辖市人民政府可以结合本地实际情况在规定的幅度内制定具体交纳标准。";
}
else{document.form1.textarea.value="说明：地方标准不统一，因此该项不支持反算标的额";}
}
function zhishi(){
if(document.getElementById("r1").checked)
{
var result="500—1000";
var shuru=document.form1.textfield.value;
if ((shuru>0)&&(shuru<=10000)){
result=50;
}
else if ((shuru>10000)&&(shuru<=100000)){
result=shuru*0.025-200;
}
else if ((shuru>100000)&&(shuru<=200000)){
result=shuru*0.02+300
}
else if ((shuru>200000)&&(shuru<=500000)){
result=shuru*0.015+1300
}
else if ((shuru>500000)&&(shuru<=1000000)){
result=shuru*0.01+3800
}
else if ((shuru>1000000)&&(shuru<=2000000)){
result=shuru*0.009+4800
}
else if ((shuru>2000000)&&(shuru<=5000000)){
result=shuru*0.008+6800
}
else if ((shuru>5000000)&&(shuru<=10000000)){
result=shuru*0.007+11800
}
else if ((shuru>10000000)&&(shuru<=20000000)){
result=shuru*0.006+21800
}
else if (shuru>20000000){
result=shuru*0.005+41800
}
if (result!=="500—1000"){
result=result.toFixed(2)
}
document.form1.textarea.value="说明：知识产权民事案件，没有争议金额或者价额的，每件交纳500元至1000元；有争议金额或者价额的，按照财产案件的标准交纳。省、自治区、直辖市人民政府可以结合本地实际情况在规定的幅度内制定具体交纳标准。";
document.form1.textfield2.value=result;
}
else{document.form1.textarea.value="说明：地方标准不统一，因此该项不支持反算标的额，可参照财产案件";}
}
function zhifuling(){
if(document.getElementById("r1").checked)
{
var result=0;
var shuru=document.form1.textfield.value;
if ((shuru>0)&&(shuru<=10000)){
result=16.67;
}
else if ((shuru>10000)&&(shuru<=100000)){
result=(shuru*0.025-200)/3;
}
else if ((shuru>100000)&&(shuru<=200000)){
result=(shuru*0.02+300)/3
}
else if ((shuru>200000)&&(shuru<=500000)){
result=(shuru*0.015+1300)/3
}
else if ((shuru>500000)&&(shuru<=1000000)){
result=(shuru*0.01+3800)/3
}
else if ((shuru>1000000)&&(shuru<=2000000)){
result=(shuru*0.009+4800)/3
}
else if ((shuru>2000000)&&(shuru<=5000000)){
result=(shuru*0.008+6800)/3
}
else if ((shuru>5000000)&&(shuru<=10000000)){
result=(shuru*0.007+11800)/3
}
else if ((shuru>10000000)&&(shuru<=20000000)){
result=(shuru*0.006+21800)/3
}
else if (shuru>20000000){
result=(shuru*0.005+41800)/3
}
document.form1.textarea.value="说明：依法申请支付令的，比照财产案件受理费标准的1/3交纳。";
document.form1.textfield2.value=result.toFixed(2);
}
 else{document.form1.textarea.value="说明：可比照财产案件标的额标准的1/3确定。";}
}
function pochan(){
if(document.getElementById("r1").checked)
{
var result=0;
var shuru=document.form1.textfield.value;
if ((shuru>0)&&(shuru<=10000)){
result=25;
}
else if ((shuru>10000)&&(shuru<=100000)){
result=(shuru*0.025-200)/2;
}
else if ((shuru>100000)&&(shuru<=200000)){
result=(shuru*0.02+300)/2
}
else if ((shuru>200000)&&(shuru<=500000)){
result=(shuru*0.015+1300)/2
}
else if ((shuru>500000)&&(shuru<=1000000)){
result=(shuru*0.01+3800)/2
}
else if ((shuru>1000000)&&(shuru<=2000000)){
result=(shuru*0.009+4800)/2
}
else if ((shuru>2000000)&&(shuru<=5000000)){
result=(shuru*0.008+6800)/2
}
else if ((shuru>5000000)&&(shuru<=10000000)){
result=(shuru*0.007+11800)/2
}
else if ((shuru>10000000)&&(shuru<=20000000)){
result=(shuru*0.006+21800)/2
}
else if (shuru>20000000){
result=(shuru*0.005+41800)/2
}
if ((result>=300000)){
result=300000
}
document.form1.textarea.value="说明：破产案件依据破产财产总额计算，按照财产案件受理费标准减半交纳，但是，最高不超过30万元。";
document.form1.textfield2.value=result.toFixed(2);
} 
else{document.form1.textarea.value="说明：比照财产案件的一半确定，30万元以上标的额不受限制";}
} 
function jianban(){
document.form1.textarea.value="说明：以调解方式结案或者当事人申请撤诉的，减半交纳案件受理费。适用简易程序审理的案件减半交纳案件受理费。被告提起反诉、有独立请求权的第三人提出与本案有关的诉讼请求，人民法院决定合并审理的，分别减半交纳案件受理费。"
var shuru=document.form1.textfield2.value
if (shuru.indexOf("+")==-1&&shuru.indexOf("—")==-1){
document.form1.textfield2.value=shuru*1/2
}
else if (shuru.indexOf("+")!==-1)
{
document.form1.textfield2.value=shuru.substring(0,shuru.indexOf("+"))*1/2+"+"+"("+shuru.substring((shuru.indexOf("(")+1), shuru.indexOf("—"))*1/2+"—"+ shuru.substring((shuru.indexOf("—")+1), shuru.indexOf(")"))*1/2+")"
}
else {
document.form1.textfield2.value=shuru.substring(0,shuru.indexOf("—"))*1/2+"—"+shuru.substring((shuru.indexOf("—")+1),shuru.lenth)*1/2
}
}
function ybgfd(){
var sssze=document.form2.textfield3.value;
var bgcdssf=document.form2.textfield5.value;
var ygcdssf=sssze*1-bgcdssf*1;
var bgbsze=document.form2.textfield4.value;
var mbgbse=document.form2.textfield6.value;
if (bgbsze*1==0){
var mbgssf=0;}
else {
var mbgssf=bgcdssf*1*(mbgbse*1)/(bgbsze*1);
}
document.form2.textfield7.value=ygcdssf;
document.form2.textfield8.value=mbgssf;
}