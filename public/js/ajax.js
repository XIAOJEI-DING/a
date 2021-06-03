// $("#login").click(function(){
//     $.ajax({
//       url: "/",
//       type: "post",
//       data: {
//           username: $("#user_name").val(),
//           password: $("#user_pw").val()
//       },
//       success: function(data){    
//           if(data.status==1){
//               alert("登入成功")
//           }else{
//               alert("登入失败")
//       }
//       }
//   });
// });



// $("#register").click(function() {
//     $.ajax({
//         url: "/register",
//         type: "post",
//         data: {
//             user_name: $("#userName").val(),
//             user_pw: $("#password").val(),
//             other_name: $("#theName").val(),
//             user_id: $("#identity").val(),
//             user_email: $("#mailbox").val(),
//             user_tel: $("#phone").val(),

//         },
//         success: function(data){    
//             if(data.status==1){
//                 alert("注册成功")
//             }else{
//             alert("注册失败")
//         }
//     }
//     });
// });

//后台
$(function(){
    //删除
    Array.from(document.getElementsByClassName("delete")).forEach(i=>{
        i.onclick = (()=>{
        let id = i.getAttribute('data-id')
        $.ajax({
            url:"/product/del/"+id,
            type:"delete",
            success:function(data){
                if(data == 'success'){
                    alert('删除成功')
                    $(i).parent().parent().remove()
                }
            }
        })
    }
        )
})
});

  修改
  Array.from(document.getElementsByClassName('update')).forEach(i => {
    i.onclick = function () {
        let ind = this.getAttribute('data-id1')
        window.location.href = '/product/update/' + ind
    }
})


