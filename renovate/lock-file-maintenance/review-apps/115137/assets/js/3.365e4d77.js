(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{253:function(t,e,i){},254:function(t,e,i){},262:function(t,e,i){},265:function(t,e,i){"use strict";var n=i(293),a=i(247),s={name:"NavLinks",components:{NavLink:i(248).a,DropdownLink:n.a},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(a.j)(t),{items:(t.items||[]).map(a.j)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let i=0;i<e.length;i++){const n=e[i];if(new RegExp(n,"i").test(t))return n}return"Source"}}},o=(i(272),i(3)),r=Object(o.a)(s,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.a=r.exports},272:function(t,e,i){"use strict";i(253)},273:function(t,e,i){"use strict";i(254)},281:function(t,e,i){"use strict";i(262)},291:function(t,e,i){"use strict";var n={name:"Home",mounted(){"fr"===(void 0===navigator.languages?[navigator.language]:navigator.languages)[0].substring(0,2)?window.location.replace(window.location.href+"fr/"):window.location.replace(window.location.href+"en/")}},a=i(3),s=Object(a.a)(n,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.a=s.exports},292:function(t,e,i){"use strict";var n=i(267),a=i(290),s=i(294),o=i(265);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:s.a,NavLinks:o.a,SearchBox:a.a,AlgoliaSearchBox:n.a},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName},siteSubTitle(){return this.$themeLocaleConfig.siteSubtitle},logo(){return this.$themeLocaleConfig.logo||this.$site.themeConfig.logo}},mounted(){const t=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},u=(i(273),i(3)),c=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("div",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.logo}},[t._v(t._s(t.$siteTitle))]):t._e(),t._v(" "),t.siteSubTitle?e("div",{ref:"siteSubTitle",staticClass:"site-subtitle"},[t._v(t._s(t.siteSubTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide nav-links"})],1)],1)}),[],!1,null,null,null);e.a=c.exports},296:function(t,e,i){"use strict";i.r(e);var n=i(289),a=i(248),s={name:"Layout",components:{ParentLayout:n.a,ParentNavLink:a.a},computed:{backToLink(){return this.$themeLocaleConfig.backToNotifyLink},backToText(){return this.$themeLocaleConfig.backToNotifyText}}},o=(i(281),i(3)),r=Object(o.a)(s,(function(){var t=this,e=t._self._c;return e("ParentLayout",{scopedSlots:t._u([{key:"sidebar-top",fn:function(){return[e("div",{staticClass:"back-to-notify"},[t.backToText?e("ParentNavLink",{attrs:{item:{link:t.backToLink,text:t.backToText}}}):t._e()],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=r.exports}}]);