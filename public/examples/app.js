    
 window.TrackJS &&
 TrackJS.install({
   token: "ee6fab19c5a04ac1a32a645abde4613a",
   application: "argon-dashboard-free"
 });
 document.getElementById("back").addEventListener('click',async (e) => {
window.location.replace("../gate.html")
})   

// Fungsi untuk login
const login = async (email, password) => {
    try {
      const response = await fetch('https://rest-cdp-sunob45tza-et.a.run.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        // Simpan token di local storage setelah login berhasil
        localStorage.setItem('authToken', data.token);
        window.location.replace('../index.html');
      } else {
        console.error('Login failed:', data.message);
        alert("pasword atau email anda salah!!!");
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  
  


  

  // Tangani submit form login
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    // Panggil fungsi login dengan email dan password
    login(email,password);
  });
  
 

  

