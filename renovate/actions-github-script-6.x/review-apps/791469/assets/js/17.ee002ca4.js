(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{389:function(t,e,s){"use strict";s.r(e);var a=s(11),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"get-message-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-message-status"}},[t._v("#")]),t._v(" Get message status")]),t._v(" "),s("p",[t._v("You can use the GC Notify API to retrieve the status of one or more messages.")]),t._v(" "),s("p",[t._v("Message status depends on the type of message you have sent.")]),t._v(" "),s("p",[t._v("You can only get the status of messages that are 7 days old or newer (by default). Data retention can be configured to be anywhere between 3 and 90 days at either the service or notification level.")]),t._v(" "),s("h2",{attrs:{id:"email-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#email-status"}},[t._v("#")]),t._v(" Email status")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Status")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Information")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Created")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify has placed the message in a queue, ready to be sent to the provider. It should only remain in this state for a few seconds.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Sending")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify has sent the message to the provider. The provider will try to deliver the message to the recipient for up to 72 hours. GC Notify is waiting for delivery information.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Delivered")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The message was successfully delivered.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Failed")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("This covers all failure statuses:"),s("br"),t._v("- "),s("code",[t._v("permanent-failure")]),t._v(' - "The provider could not deliver the message because the email address was wrong. You should remove these email addresses from your database."'),s("br"),t._v("- "),s("code",[t._v("temporary-failure")]),t._v(' - "The provider could not deliver the message. This can happen when the recipient’s inbox is full. You can try to send the message again."'),s("br"),t._v("- "),s("code",[t._v("technical-failure")]),t._v(' - "Your message was not sent because there was a problem between GC Notify and the provider.'),s("br"),t._v('You’ll have to try sending your messages again."')])])])]),t._v(" "),s("h2",{attrs:{id:"text-message-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-message-status"}},[t._v("#")]),t._v(" Text message status")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Status")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Information")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Created")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify has placed the message in a queue, ready to be sent to the provider. It should only remain in this state for a few seconds.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Sending")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify has sent the message to the provider. The provider will try to deliver the message to the recipient for up to 72 hours. GC Notify is waiting for delivery information.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Pending")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("GC Notify is waiting for more delivery information."),s("br"),t._v("GC Notify received a callback from the provider but the recipient’s device has not yet responded. Another callback from the provider determines the final status of the notification.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Sent / Sent internationally")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The message was sent to an international number. The mobile networks in some countries do not provide any more delivery information. The GC Notify client API returns this status as "),s("code",[t._v("sent")]),t._v(". The GC Notify client app returns this status as "),s("code",[t._v("Sent to an international number")]),t._v(".")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Delivered")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The message was successfully delivered.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("Failed")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("This covers all failure statuses:"),s("br"),t._v("- "),s("code",[t._v("permanent-failure")]),t._v(' - "The provider could not deliver the message. This can happen if the phone number was wrong or if the network operator rejects the message. If you’re sure that these phone numbers are correct, you should '),s("a",{attrs:{href:"https://notification.canada.ca/contact",target:"_blank",rel:"noopener noreferrer"}},[t._v("contact us"),s("OutboundLink")],1),t._v('. If not, you should remove them from your database. You’ll still be charged for text messages that cannot be delivered."'),s("br"),t._v("- "),s("code",[t._v("temporary-failure")]),t._v(' - "The provider could not deliver the message. This can happen when the recipient’s phone is off, has no signal, or their text message inbox is full. You can try to send the message again. You’ll still be charged for text messages to phones that are not accepting messages."'),s("br"),t._v("- "),s("code",[t._v("technical-failure")]),t._v(' - "Your message was not sent because there was a problem between GC Notify and the provider.'),s("br"),t._v('You’ll have to try sending your messages again. You will not be charged for text messages that are affected by a technical failure."')])])])]),t._v(" "),s("h2",{attrs:{id:"get-the-status-of-one-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-status-of-one-message"}},[t._v("#")]),t._v(" Get the status of one message")]),t._v(" "),s("p",[t._v("You can use the GC Notify API to get a single message status.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /v2/notifications/{notification_id}\n")])])]),s("h3",{attrs:{id:"query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query parameters")]),t._v(" "),s("h4",{attrs:{id:"notification-id-required"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notification-id-required"}},[t._v("#")]),t._v(" notification_id (required)")]),t._v(" "),s("p",[t._v("The ID of the notification. You can find the notification ID in the response to the original notification method call.")]),t._v(" "),s("p",[t._v("You can also find it by "),s("a",{attrs:{href:"https://notification.canada.ca/sign-in",target:"_blank",rel:"noopener noreferrer"}},[t._v("signing in to GC Notify"),s("OutboundLink")],1),t._v(" and going to the "),s("strong",[t._v("API integration")]),t._v(" page.")]),t._v(" "),s("p",[t._v("You can filter the returned messages by including the following optional parameters in the URL:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("template_type")])]),t._v(" "),s("li",[s("code",[t._v("status")])]),t._v(" "),s("li",[s("code",[t._v("reference")])]),t._v(" "),s("li",[s("code",[t._v("older_than")])])]),t._v(" "),s("h3",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("p",[t._v("If the request is successful, the response body is "),s("code",[t._v("json")]),t._v(" and the status code is "),s("code",[t._v("200")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"740e5834-3a29-46b4-9a6f-16142fde533a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - notification ID\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email_address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sender@something.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  # required string for emails\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone_number"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+447900900123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  # required string for text messages\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email / sms"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sending / delivered / permanent-failure / temporary-failure / technical-failure"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider_response"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - will not be "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v(" only when the status is a technical failure\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"template"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f33517ff-2a88-4f6e-b855-c550268ce08a"')]),t._v(" # required string - template ID\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uri"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/v2/template/{id}/{version}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - body of notification\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subject"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),t._v(" # required string for email - subject of email\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - date and time notification created\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_by_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - name of the person who sent the notification if sent manually\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sent_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - date and time notification sent to provider\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"completed_at:"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),t._v(" # optional string - date and time notification delivered or failed\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"error-codes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-codes"}},[t._v("#")]),t._v(" Error codes")]),t._v(" "),s("p",[t._v("If the request is not successful, the response body is "),s("code",[t._v("json")]),t._v(", refer to the table below for details.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("status_code")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("message")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("How to fix")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("400")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("[{")]),s("br"),s("code",[t._v('"error": "ValidationError",')]),s("br"),s("code",[t._v('"message": "id is not a valid UUID"')]),s("br"),s("code",[t._v("}]")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Check the notification ID")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("403")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("[{")]),s("br"),s("code",[t._v('"error": "AuthError",')]),s("br"),s("code",[t._v('"message": "Error: Your system clock must be accurate to within 30 seconds"')]),s("br"),s("code",[t._v("}]")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Check your system clock")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("403")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("[{")]),s("br"),s("code",[t._v('"error": "AuthError",')]),s("br"),s("code",[t._v('"message": "Invalid token: API key not found"')]),s("br"),s("code",[t._v("}]")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Use the correct "),s("RouterLink",{attrs:{to:"/en/keys.html"}},[t._v("API key")])],1)]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("404")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("[{")]),s("br"),s("code",[t._v('"error": "NoResultFound",')]),s("br"),s("code",[t._v('"message": "No result found"')]),s("br"),s("code",[t._v("}]")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Check the notification ID")])])])]),t._v(" "),s("h2",{attrs:{id:"get-the-status-of-multiple-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-the-status-of-multiple-messages"}},[t._v("#")]),t._v(" Get the status of multiple messages")]),t._v(" "),s("p",[t._v("You can use the GC Notify API to find the status of multiple messages at the same time.")]),t._v(" "),s("p",[t._v("This API call returns one page of up to 250 messages and statuses. You can get either the most recent messages, or get older messages by specifying a particular notification ID in the "),s("code",[t._v("older_than")]),t._v(" argument.")]),t._v(" "),s("p",[t._v("You can only get the status of messages that are 7 days old or newer (by default). Data retention can be configured to be anywhere between 3 and 90 days at either the service or notification level.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /v2/notifications\n")])])]),s("h4",{attrs:{id:"all-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#all-messages"}},[t._v("#")]),t._v(" All messages")]),t._v(" "),s("p",[t._v("This will return all your messages with statuses. They will display in pages of up to 250 messages each.")]),t._v(" "),s("p",[t._v("You can filter the returned messages by including the following optional arguments in the URL:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("template_type")])]),t._v(" "),s("li",[s("code",[t._v("status")])]),t._v(" "),s("li",[s("code",[t._v("reference")])]),t._v(" "),s("li",[s("code",[t._v("older_than")])])]),t._v(" "),s("h3",{attrs:{id:"arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),s("p",[t._v("You can omit any of these arguments to ignore these filters.")]),t._v(" "),s("h4",{attrs:{id:"template-type-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-type-optional"}},[t._v("#")]),t._v(" template_type (optional)")]),t._v(" "),s("p",[t._v("If you specify "),s("code",[t._v("template_type")]),t._v(", you can filter by:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("email")])]),t._v(" "),s("li",[s("code",[t._v("sms")])])]),t._v(" "),s("h4",{attrs:{id:"status-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status-optional"}},[t._v("#")]),t._v(" status (optional)")]),t._v(" "),s("p",[t._v("If you specify "),s("code",[t._v("status")]),t._v(", you can filter by each:")]),t._v(" "),s("ul",[s("li",[t._v("email status")]),t._v(" "),s("li",[t._v("text message status")])]),t._v(" "),s("p",[t._v("You can leave out this argument to ignore this filter.")]),t._v(" "),s("h4",{attrs:{id:"reference-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference-optional"}},[t._v("#")]),t._v(" reference (optional)")]),t._v(" "),s("p",[t._v("If you specify a "),s("code",[t._v("reference")]),t._v(", you can filter results by that value, an identifier that you can create if necessary. This reference identifies a single notification or a batch of notifications. It must not contain any personal information such as name or postal address. For example:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),t._v("\n")])])]),s("h4",{attrs:{id:"older-than-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#older-than-optional"}},[t._v("#")]),t._v(" older_than (optional)")]),t._v(" "),s("p",[t._v("Input the ID of a notification into this argument. If you use this "),s("code",[t._v("older_than")]),t._v(" argument, the method returns the next 250 received notifications older than the given ID.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('"older_than":"740e5834-3a29-46b4-9a6f-16142fde533a"\n')])])]),s("p",[t._v("If you leave out this argument, the method returns the most recent 250 notifications.")]),t._v(" "),s("p",[t._v("The client only returns notifications that are 7 days old or newer. If the notification specified in this argument is older than 7 days, the client returns an empty response.")]),t._v(" "),s("h3",{attrs:{id:"response-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),s("p",[t._v("If the request is successful, the response body is "),s("code",[t._v("json")]),t._v(" and the status code is "),s("code",[t._v("200")]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"all-messages-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#all-messages-2"}},[t._v("#")]),t._v(" All messages")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"notifications"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"740e5834-3a29-46b4-9a6f-16142fde533a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - notification ID\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reference"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - client reference\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email_address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sender@something.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  # required string for emails\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone_number"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+447900900123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  # required string for text messages\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email / sms"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sending / delivered / permanent-failure / temporary-failure / technical-failure"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"provider_response"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - will not be "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v(" only when the status is a technical failure\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"template"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'f33517ff-2a88-4f6e-b855-c550268ce08a' # required string - template ID\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uri"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/v2/template/{id}/{version}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"body"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - body of notification\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subject"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),t._v(" # required string for email - subject of email\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # required string - date and time notification created\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_by_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - name of the person who sent the notification if sent manually\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sent_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" STRING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" # optional string - date and time notification sent to provider\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"completed_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STRING"')]),t._v(" # optional string - date and time notification delivered or failed\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    …\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"links"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"current"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/notifications?template_type=sms&status=delivered"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/notifications?other_than=last_id_in_list&template_type=sms&status=delivered"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"error-codes-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#error-codes-2"}},[t._v("#")]),t._v(" Error codes")]),t._v(" "),s("p",[t._v("If the request is not successful, the response body is "),s("code",[t._v("json")]),t._v(", refer to the table below for details.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("status_code")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("message")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("How to fix")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("400")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("[{")]),s("br"),s("code",[t._v('"error": "ValidationError",')]),s("br"),s("code",[t._v('"message": "id is not a valid UUID"')]),s("br"),s("code",[t._v("}]")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Check the notification ID")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("403")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("[{")]),s("br"),s("code",[t._v('"error": "AuthError",')]),s("br"),s("code",[t._v('"message": "Error: Your system clock must be accurate to within 30 seconds"')]),s("br"),s("code",[t._v("}]")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Check your system clock")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("403")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("[{")]),s("br"),s("code",[t._v('"error": "AuthError",')]),s("br"),s("code",[t._v('"message": "Invalid token: API key not found"')]),s("br"),s("code",[t._v("}]")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Use the correct "),s("RouterLink",{attrs:{to:"/en/keys.html"}},[t._v("API key")])],1)]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("404")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("[{")]),s("br"),s("code",[t._v('"error": "NoResultFound",')]),s("br"),s("code",[t._v('"message": "No result found"')]),s("br"),s("code",[t._v("}]")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Check the notification ID")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);