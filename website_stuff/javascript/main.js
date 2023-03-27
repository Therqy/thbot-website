    // Date feature
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = m + "/" + d + "/" + y;


    const btn = document.querySelector(".btn-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
      document.body.classList.toggle("dark-theme");
    } else if (currentTheme == "light") {
      document.body.classList.toggle("light-theme");
    }

    btn.addEventListener("click", function () {
      if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme")
          ? "light"
          : "dark";
      } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme")
          ? "dark"
          : "light";
      }
      localStorage.setItem("theme", theme);
    });


    function openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    
    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }
  
    /* DO NOT TOUCH - last updated api ty https://stackoverflow.com/questions/56279807/is-it-possible-to-automatically-have-the-last-updated-date-on-my-website-changed*/
    const desiredRepo = "seachel.github.io";
    const dateTagClass = ".date";
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        let repos = JSON.parse(this.responseText);
    
        repos.forEach((repo)=>{
          if (repo.name == desiredRepo)
          {
            var lastUpdated = new Date(repo.updated_at);
            var day = lastUpdated.getUTCDate();
            var month = lastUpdated.getUTCMonth();
            var year = lastUpdated.getUTCFullYear();
            $(dateTagClass).text(`Last updated: ${year}-${month}-${day}`);
          }
        });
      }
    };
    xhttp.open("GET", "https://api.github.com/users/Turqee/repos", true);
    xhttp.send();