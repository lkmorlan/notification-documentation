(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{393:function(e,t,s){"use strict";s.r(t);var r=s(11),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"cles-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cles-api"}},[e._v("#")]),e._v(" Clés API")]),e._v(" "),s("p",[e._v("Il existe trois types de clés API différents :")]),e._v(" "),s("ul",[s("li",[e._v("test")]),e._v(" "),s("li",[e._v("équipe et liste de confiance")]),e._v(" "),s("li",[e._v("active")])]),e._v(" "),s("p",[e._v("Lorsque vous configurez un nouveau service, il démarrera en mode d’essai. Un service en mode d’essai peut créer des "),s("strong",[e._v("clés de test")]),e._v(" ou "),s("strong",[e._v("des clés d’équipe et de liste de confiance")]),e._v(". Vous devez disposer d’un service activé pour créer une "),s("strong",[e._v("clé active")]),e._v(".")]),e._v(" "),s("p",[e._v("Pour créer une clé API :")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://notification.canada.ca/sign-in?lang=fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Connectez-vous à Notification GC"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("Allez à la page "),s("strong",[e._v("Intégration API")]),e._v(".")]),e._v(" "),s("li",[e._v("Sélectionnez "),s("strong",[e._v("Clés API")]),e._v(".")]),e._v(" "),s("li",[e._v("Sélectionnez "),s("strong",[e._v("Créer une clé API")]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[e._v("#")]),e._v(" Test")]),e._v(" "),s("p",[e._v("Utilisez une clé de test pour tester la performance de votre service et son intégration avec Notification GC.")]),e._v(" "),s("p",[e._v("Les messages envoyés à l’aide d’une clé de test :")]),e._v(" "),s("ul",[s("li",[e._v("génèrent des réponses réalistes")]),e._v(" "),s("li",[e._v("permettent d'obtenir un état de livraison")]),e._v(" "),s("li",[e._v("ne sont pas réellement livrés à un destinataire")]),e._v(" "),s("li",[e._v("n’apparaissent pas sur votre tableau de bord")]),e._v(" "),s("li",[e._v("ne comptent pas sur vos allocations de courriels et de messages texte")])]),e._v(" "),s("p",[e._v("Pour tester les réponses d’échec avec une clé de test, utilisez les numéros et adresses suivants :")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("Numéro de téléphone/adresse de courriel")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Réponse")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("+15149301633")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("temporary-failure")])])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("+15149301632")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("permanent-failure")])])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("temp-fail@simulator.notify")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("temporary-failure")])])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("perm-fail@simulator.notify")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("permanent-failure")])])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("tout autre numéro ou adresse valide")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("delivered")])])])])]),e._v(" "),s("p",[e._v("Vous n’êtes pas obligé de révoquer les clés de test.")]),e._v(" "),s("h2",{attrs:{id:"equipe-et-liste-de-confiance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#equipe-et-liste-de-confiance"}},[e._v("#")]),e._v(" Équipe et liste de confiance")]),e._v(" "),s("p",[e._v("Une clé d’équipe et de liste de confiance vous permet d’envoyer de vrais messages aux membres de votre équipe ainsi qu’aux adresses ou numéros sur votre liste de confiance pendant que votre service est encore en mode d’essai.")]),e._v(" "),s("p",[e._v("Vous obtiendrez une erreur si vous utilisez ces clés pour envoyer des messages à toute personne qui n’est pas dans votre équipe ou votre liste de confiance.")]),e._v(" "),s("p",[e._v("Les messages envoyés avec une clé d’équipe et de liste de confiance apparaissent sur votre tableau de bord et comptent sur vos allocations de courriels et de messages texte.")]),e._v(" "),s("p",[e._v("Vous n’êtes pas obligé de révoquer les clés d’équipe et de liste de confiance.")]),e._v(" "),s("h2",{attrs:{id:"active"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#active"}},[e._v("#")]),e._v(" Active")]),e._v(" "),s("p",[e._v("Vous ne pouvez créer des clés active qu’une fois votre service est activé. Vous pouvez utiliser des clés actives pour envoyer des messages à n’importe qui. Activez votre service dans les paramètres.")]),e._v(" "),s("p",[e._v("Les messages envoyés avec une clé active apparaissent sur votre tableau de bord et comptent sur vos allocations de courriels et de messages texte.")]),e._v(" "),s("p",[e._v("Vous devez révoquer et recréer régulièrement ces clés. Pour révoquer une clé :")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://notification.canada.ca/sign-in?lang=fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Connectez-vous à Notification GC"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("li",[e._v("Allez à la page "),s("strong",[e._v("Intégration API")]),e._v(".")]),e._v(" "),s("li",[e._v("Sélectionnez "),s("strong",[e._v("Clés API")]),e._v(".")]),e._v(" "),s("li",[e._v("Sélectionnez "),s("strong",[e._v("Révoquer")]),e._v("_ pour la clé API que vous voulez révoquer.")])]),e._v(" "),s("p",[e._v("Vous pouvez avoir plusieurs clés actives à la fois.")]),e._v(" "),s("p",[e._v("Vous ne devez jamais envoyer de messages de test à des numéros ou adresses non valides à l’aide d’une clé active.")])])}),[],!1,null,null,null);t.default=a.exports}}]);