


const playersData = [
{
    name: "Skyzz",
    role: "Espagnol",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/b1906392-e78e-4196-878d-ee7c930b1d2c-profile_image-70x70.png",
    twitter: "https://x.com/Skyzzfn___",
    twitch: "",
  } ,

  {
    name: "Besak",
    role: "Français",
    img: "https://pbs.twimg.com/profile_images/1915469140036366336/mRhrCPHF_400x400.jpg",
    twitter: "https://x.com/besakftn",
    twitch: "",
  } , 

  {
    name: "Xsweat",
    role: "Français",
    img: "https://static-cdn.jtvnw.net/jtv_user_pictures/80f7da2b-36a1-4683-a929-58bd2447fd0d-profile_image-70x70.png",
    twitter: "https://x.com/xsweatfn",
    twitch: "",
  }

];

const staffData = [
    {
      name: "Kiko",
      role: "CEO",
      img: "file:///C:/Users/ndurr/Downloads/kiko.jpg",
      twitter: "https://x.com/Weykofnr",
      twitch : "https://www.twitch.tv/kiko3k_", 
     
    },

    {
        name: "Iron",
        role: "Manager / Aide",
        img: "https://pbs.twimg.com/profile_images/1912923168311808000/cygPuOlh_400x400.jpg",
        twitter: "https://x.com/VTX-Iron",
        twitch: "https://www.twitch.tv/ironftn_"
      }
  ];

  function display(id, data, isStaff = false) {
    const container = document.getElementById(id);
    if (!container) return;
  
    data.forEach(p => {
  
      let socials = `
      
      <a href="${p.twitter || '#'}" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
      `;
  
      // 🔥 PLUS DE RÉSEAUX POUR LE STAFF
      if (isStaff) {
        socials += `
        <a href="${p.twitch|| '#'}" target="_blank"><i class="fa-brands fa-twitch"></i></a>
    `;
      }
  
      container.innerHTML += `
        <div class="card">
          <img src="${p.img}">
          <h3>${p.name}</h3>
          <p>${p.role}</p>
  
          <div class="card-socials">
            ${socials}
          </div>
        </div>
      `;
    });
  }

  display("players", playersData, false);
  display("staff", staffData, true);

