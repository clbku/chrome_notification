window.onload = function(){
    var show = document.getElementById("shownotify");
    if(!window.Notification){
        alert("Trình duyệt của bạn không hỗ trợ thông báo");
    }
    else{
        Notification.requestPermission = function(e){
            if (e==="denied"){
                alert("Bạn chưa cho phép hiện thông báo")
            }
        }
    }
    show.addEventListener("click", function(e){
        e.preventDefault();
        var notify;
        if (Notification.permission==="default"){
            alert("Bạn chưa cho phép hiện thông báo");
        }
        else{
            notify = new Notification(
                'Bạn có thông báo mới',
                    {
                        body: "Nghi Bình has changed her profile picture",
                        icon: "../nghibinh.jpg",
                        tag: "http://www.facebook.com/cankuro.19"
                    }
            );
            notify.onclick = function (){
                window.location.href = this.tag;
            }
        }
    })
}