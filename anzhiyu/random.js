var posts=["FAQ/","am/","iptv-go/","iptv-pixman/","airport-69yun/","airport-zqjc/","domain-cloudns/","airport-hongxingdl/","domain-dynv6/","am-nodejs-proxy-serv00/","am-serv00-alist-down/","am-serv00-nezha/","ydns/","domain-us.kg/","domain-obl.org/","serv00-vmess-cdn/","infinityfree/","serv00-wordpress/","serv00/","am-serv00-socks5/","serv00-alist/","vpn-rss-tools/","vpn-karing/","vpn/","vpn-warp/","am-cf-bind-domain/","am-cf-github-kv/","am-cf-cloudflare/","am-cf-kv/","am-cf-priority/","am-cf-unlock-gpt/","am-cf-tunnel/","am-trojan-up/","am-cf-register/","am-cf-github/","am-tunnel-addressesapi/","am-cf-work-page/","am-tunnel-down-problem/","am-tunnel-down/","am-tunnel-priority/","bpb/","cf/","am-tunnel-up-problem/","ssh/","am-tunnel-up/","am-cf-sub-rss/"];function toRandomPost(){
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