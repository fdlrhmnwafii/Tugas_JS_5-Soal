function login(){
    let akun = document.getElementById("txt");
    let pw = document.getElementById("pswd");
    if(akun.value == "Fadel" && pw.value == "12345"){
        alert("Selamat Datang")
        console.log("pw bener")
        document.write("<h1>Login Sukses</h1>")
    }else {
        alert("Username/Password Salah. Coba Lagi")
        console.log("password salah")
    }
}