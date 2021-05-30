window.onload = function(){
 
    var btn = document.getElementById('btn');//提交按钮
    var p = document.getElementsByTagName('p');//文字提示标签数组
    var span = document.getElementsByTagName('span');//文字提示标签数组
    var forms = document.getElementById('forms');//表单
    var choose = document.getElementById('choose');//选择框
    var userName = document.getElementById('user_name');//用户名
    var password = document.getElementById('user_pw');//密码
    var passwordTwos = document.getElementById('passwordTwos');//确认密码
    var theName = document.getElementById('other_name');//姓名
    var identity = document.getElementById('user_id');//身份证号
    var mailbox = document.getElementById('user_email');//邮箱
    var phone = document.getElementById('user_tel');//电话号码
    
    //正则表达式
    var reg1 = /^[\w]{6,18}$/,//用户名 6--18位数字,字母,下划线_
    reg2 = /^[\W\da-zA-Z_]{6,20}$/,//密码 6--20位数字,字母,任意字符
    reg3 = /^[\u4e00-\u9fa5]{2,5}$/,//姓名 2-5为的汉子
    reg4 = /^[1234568][\d]{16}[\dxX]$/,
    //身份证号 第一个数字1234568，中间任意数字16位，结尾任意数字或者xX；
    reg5 = /^[a-z1-9](?:\w|\-)+@[a-z\d]+\.[a-z]{2,4}$/i,
    //邮箱 以字母或者数字1-9开头+(任意个数字字母下划线\-)+@+(任意字母数字)+.+(2-4个字母)
    reg6 = /^[1][\d]{10}$/;//手机号 首个数字为1，后面10为任意数字
    
    //校验
    var n1 = false,
    n2 = false,
    n3 = false,
    n4 = false,
    n5 = false,
    n6 = false,
    n7 = false;
    
    //用户名获得焦点时
    userName.onfocus = function(){
    span[0].innerHTML = '请输入6--18位数字,字母,下划线_';
    span[0].style.color = 'green';
    }
    //用户名离开焦点时
    userName.onblur = function(){
    if(this.value == ''){
    span[0].innerHTML = '用户名不能为空！';
    span[0].style.color = 'red';
    } else if(!reg1.test(this.value)){
    span[0].innerHTML = '请输入6--18位数字,字母,下划线_';
    span[0].style.color = 'red';
    } else {
    span[0].innerHTML = '格式正确!';
    span[0].style.color = 'green';
    return n1 = true;
    }
    }
    
    //密码获得焦点时
    password.onfocus = function(){
    span[1].innerHTML = '请输入6--20位数字,字母,任意字符';
    span[1].style.color = 'green';
    }
    //密码离开焦点时
    password.onblur = function(){
    if(this.value == ''){
    span[1].innerHTML = '密码不能为空！';
    span[1].style.color = 'red';
    } else if(!reg2.test(this.value)){
    span[1].innerHTML = '请输入6--20位数字,字母,任意字符';
    span[1].style.color = 'red';
    } else {
    span[1].innerHTML = '格式正确!';
    span[1].style.color = 'green';
    return n2 = true;
    }
    }
    
    //确认密码获得焦点时
    passwordTwos.onfocus = function(){
    span[2].innerHTML = '请确认两次密码一致';
    span[2].style.color = 'green';
    }
    //确认密码离开焦点时
    passwordTwos.onblur = function(){
    if(this.value == ''){
    span[2].innerHTML = '确认密码不能为空！';
    span[2].style.color = 'red';
    } else if(this.value != password.value){
    span[2].innerHTML = '两次密码不相同';
    span[2].style.color = 'red';
    } else {
    span[2].innerHTML = '确认密码正确!';
    span[2].style.color = 'green';
    return n3 = true;
    }
    }
    
    //姓名获得焦点时
    theName.onfocus = function(){
    span[3].innerHTML = '请输入中文姓名';
    span[3].style.color = 'green';
    }
    //姓名离开焦点时
    theName.onblur = function(){
    if(this.value == ''){
    span[3].innerHTML = '姓名不能为空';
    span[3].style.color = 'red';
    } else if(!reg3.test(this.value)){
    span[3].innerHTML = '请输入正确的中文姓名';
    span[3].style.color = 'red';
    } else {
    span[3].innerHTML = '姓名正确！';
    span[3].style.color = 'green';
    return n4 = true;
    }
    }
    
    //身份证号获得焦点时
    identity.onfocus = function(){
    span[4].innerHTML = '请输入您的身份证号';
    span[4].style.color = 'green';
    }
    //身份证号离开焦点时
    identity.onblur = function(){
    if(this.value == ''){
    span[4].innerHTML = '身份证号不能为空';
    span[4].style.color = 'red';
    } else if(!reg4.test(this.value)){
    span[4].innerHTML = '身份证号格式不对';
    span[4].style.color = 'red';
    } else {
    span[4].innerHTML = '身份证正确！';
    span[4].style.color = 'green';
    return n5 = true;
    }
    }
    
    //邮箱获得焦点时
    mailbox.onfocus = function(){
    span[5].innerHTML = '请输入您的邮箱';
    span[5].style.color = 'green';
    }
    //邮箱离开焦点时
    mailbox.onblur = function(){
    if(this.value == ''){
    span[5].innerHTML = '邮箱不能为空';
    span[5].style.color = 'red';
    } else if(!reg5.test(this.value)){
    span[5].innerHTML = '邮箱格式不对';
    span[5].style.color = 'red';
    } else {
    span[5].innerHTML = '邮箱正确！';
    span[5].style.color = 'green';
    return n6 = true;
    }
    }
    
    
    //手机号获得焦点时
    phone.onfocus = function(){
    span[6].innerHTML = '请输入您的手机号';
    span[6].style.color = 'green';
    }
    //手机号离开焦点时
    phone.onblur = function(){
    if(this.value == ''){
    span[6].innerHTML = '手机号不能为空';
    span[6].style.color = 'red';
    } else if(!reg6.test(this.value)){
    span[6].innerHTML = '手机号格式不对';
    span[6].style.color = 'red'; 
    } else {
    span[6].innerHTML = '手机号正确！';
    span[6].style.color = 'green';
    return n7 = true;
    }
    }
    
    //提交按钮
    forms.onsubmit = function(){
    //正则表达式判断
    // var regs = !reg1.test(userName.value)||!reg2.test(password.value)||password.value != passwordTwos.value||!reg3.test(theName.value)||!reg4.test(identity.value)||!reg5.test(mailbox.value)||!reg6.test(phone.value);
    //变量判断
    var regs = n1==false||n2==false||n3==false||n4==false||n5==false||n6==false||n7==false;
    console.log(regs);
    if(!regs == false){
    alert('您 填 写 的 信 息 有 误 !');
    return false;
    } else if(choose.checked == false){
    alert('请 先 点 击 确 认 已 阅 读 按 钮 ！');
    return false;
    } else {
        alert('注 册 成 功 ！');

    return true;
    }
    }
     
    
   }