var posts=["am/","FAQ/","airport-69yun/","airport-hongxingdl/","airport-zqjc/","am-cf-tunnel-cdn/","cdn-fastly-gcore-anti/","domain-cloudns/","domain-dnsexit/","domain-dynv6/","domain-l53/","domain-nyc.mn/","domain-obl.org/","domain-us.kg/","ydns/","am-nodejs-proxy-serv00/","iptv-pixman/","am-serv00-alist-down/","am-serv00-nezha/","github-actions-free-rdp-ssh/","iptv-go/","serv00-alist/","infinityfree/","serv00-vmess-cdn/","am-serv00-socks5/","serv00-wordpress/","serv00/","am-cf-bind-domain/","serv00-huggingface-qinglong/","am-cf-cloudflare/","am-cf-github-kv/","am-cf-kv/","am-cf-github/","am-cf-priority/","am-cf-tunnel/","am-cf-sub-rss/","am-cf-work-page/","am-cf-unlock-gpt/","am-trojan-up/","am-tunnel-addressesapi/","am-cf-register/","am-tunnel-down-problem/","am-tunnel-down/","am-uptime-flare/","am-tunnel-up-problem/","am-tunnel-up/","bpb/","cf/","vpn-karing/","vpn-rss-tools/","vpn-warp-new/","am-tunnel-priority/","vpn-warp/","vpn/","rclone-onedrive/","ssh/","ai-3D/","ai-Llama3.1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };