!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{oYte:function(t,e,o){"use strict";o.r(e),o.d(e,"PatientModule",function(){return h});var i,r,a=o("ofXK"),u=o("tyNb"),l=o("ratC"),c=o("fXoL"),d=[{path:"patient-registration",loadChildren:function(){return o.e(112).then(o.bind(null,"VLyU")).then(function(n){return n.PatientRegistrationModule})},canActivate:[l.a]},{path:"frontdesk-booking",loadChildren:function(){return Promise.all([o.e(7),o.e(8),o.e(22),o.e(51)]).then(o.bind(null,"qC/m")).then(function(n){return n.FrontdeskBookingModule})},canActivate:[l.a]},{path:"health-seekeer-registration",loadChildren:function(){return Promise.all([o.e(0),o.e(1),o.e(5),o.e(6),o.e(8),o.e(12),o.e(17)]).then(o.bind(null,"c5et")).then(function(n){return n.HealthSeekeerRegistrationModule})},canActivate:[l.a]},{path:"book-appointment",loadChildren:function(){return Promise.all([o.e(8),o.e(22)]).then(o.bind(null,"rmfV")).then(function(n){return n.BookAppointmentModule})}},{path:"followup-details",loadChildren:function(){return o.e(111).then(o.bind(null,"+9to")).then(function(n){return n.PatientFollowupDetailsModule})}},{path:"**",redirectTo:"/notfound"}],f=((r=function t(){n(this,t)}).\u0275fac=function(n){return new(n||r)},r.\u0275mod=c.Qb({type:r}),r.\u0275inj=c.Pb({imports:[[u.l.forChild(d)],u.l]}),r),h=((i=function t(){n(this,t)}).\u0275fac=function(n){return new(n||i)},i.\u0275mod=c.Qb({type:i}),i.\u0275inj=c.Pb({imports:[[a.c,f]]}),i)}}])}();