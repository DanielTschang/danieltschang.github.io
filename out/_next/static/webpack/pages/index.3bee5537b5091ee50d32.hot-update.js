/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; },\n/* harmony export */   \"AcomplishmentsData\": function() { return /* binding */ AcomplishmentsData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: 'Meeture',\n  description: \"覓趣Meeture 是針對長輩族群設計的活動參與平台，並搭配互動式地圖，提升長輩參與戶外活動的動力及周圍公共環境品質。希望幫助長輩們接軌科技產品、提升活動參與度，進而活絡個人與環境之間的關係。希望透過提供多樣的活動資訊、創造空間與個人的回憶錄，為長輩們的退休生活，激盪更多火花。\",\n  image: '/project_gif/meeture.gif',\n  tags: ['Vue.js', 'Django', 'Line OAuth'],\n  source: 'https://github.com/HCITeamOne/MeetureWebFronted',\n  visit: 'https://github.com/HCITeamOne/MeetureWebFronted',\n  id: 1\n}, {\n  title: 'Phubber-Point',\n  description: \"Phubber-Point 是針對餐廳的集點系統，當顧客停止使用手機時，集點速度會即時的加快，進而促使顧客在餐桌上多與家人或朋友交流，減少科技冷漠的現象。而點數可以拿來換取餐點。同時，集點速度也將隨著用餐時間遞減，進而增加換桌率。\",\n  image: '/project_gif/phubber-point.gif',\n  tags: ['React Native', 'Expo', 'Django'],\n  source: 'https://github.com/DanielTschang/Phubber-Point-React-Native',\n  visit: 'https://github.com/DanielTschang/Phubber-Point-React-Native',\n  id: 0\n}];\nvar TimeLineData = [{\n  starttime: '2023 / 03',\n  end: false,\n  organization: 'M800 | Cinnox',\n  position: 'Software Engineer',\n  description: '1. Participated in developing WebRTC media server. Mainly responsible for the rtp packet handling and audio/video recording.\\n' + '2. Refactored and reconstructed the Call monitoring system which instantly triggers alert when costumers continuously making potential spam calls. Integrated with Cinnox.'\n}, {\n  starttime: '2020 / 09',\n  end: true,\n  endtime: '2022 / 08',\n  organization: 'National Tsing Hua University',\n  position: 'Master Student',\n  description: 'Institute of Information System and Applications - Computer Science'\n}, {\n  starttime: '2020 / 07',\n  end: true,\n  endtime: '2022 / 08',\n  organization: 'Academia Sinica',\n  position: 'Research Assistant',\n  description: 'Institute of Information Science - Intelligent Agent Systems Lab '\n}, {\n  starttime: '2020 / 03',\n  end: true,\n  endtime: '2020 / 07',\n  organization: 'D8AI',\n  position: 'Software Engineer Intern',\n  description: ' React.js'\n}, {\n  starttime: '2015 / 09',\n  end: true,\n  endtime: '2019 / 06',\n  organization: 'Fu-jen University',\n  position: 'Bachelor Student',\n  description: 'Major in Statistic and Information Science'\n}];\nvar AcomplishmentsData = [{\n  organization: 'Longevity-Ready Environments: Rethinking Physical Spaces for Century-Long Lives ',\n  award: 'Advanced to first round currently, To be Continued...'\n}, {\n  organization: 'AI CUP - De-identification of medical information ',\n  award: 'Top 10% Accuracy,  39/ 531'\n}, {\n  organization: 'ATCC - National College Business Case Competition ',\n  award: 'SurveyCake Team - Final Round'\n}, {\n  organization: 'Undergraduate Research - Analysing Bitcoin Float ',\n  award: 'Second Place of our department'\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwic3RhcnR0aW1lIiwiZW5kIiwib3JnYW5pemF0aW9uIiwicG9zaXRpb24iLCJlbmR0aW1lIiwiQWNvbXBsaXNobWVudHNEYXRhIiwiYXdhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLFNBRFQ7QUFFRUMsYUFBVyxFQUFFLDZJQUZmO0FBR0VDLE9BQUssRUFBRSwwQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVUsUUFBVixFQUFtQixZQUFuQixDQUpSO0FBS0VDLFFBQU0sRUFBRSxpREFMVjtBQU1FQyxPQUFLLEVBQUUsaURBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFXdEI7QUFDRU4sT0FBSyxFQUFFLGVBRFQ7QUFFRUMsYUFBVyxFQUFFLHFIQUZmO0FBR0VDLE9BQUssRUFBRSxnQ0FIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxjQUFELEVBQWlCLE1BQWpCLEVBQXlCLFFBQXpCLENBSlI7QUFLRUMsUUFBTSxFQUFFLDZEQUxWO0FBTUVDLE9BQUssRUFBRSw2REFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVhzQixDQUFqQjtBQXNCQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsV0FBUyxFQUFFLFdBQWI7QUFBMEJDLEtBQUcsRUFBQyxLQUE5QjtBQUFvQ0MsY0FBWSxFQUFFLGVBQWxEO0FBQW1FQyxVQUFRLEVBQUMsbUJBQTVFO0FBQWtHVixhQUFXLEVBQUUsbUlBQ3pHO0FBRE4sQ0FEMEIsRUFHMUI7QUFBRU8sV0FBUyxFQUFFLFdBQWI7QUFBMEJDLEtBQUcsRUFBQyxJQUE5QjtBQUFtQ0csU0FBTyxFQUFDLFdBQTNDO0FBQXVERixjQUFZLEVBQUUsK0JBQXJFO0FBQXNHQyxVQUFRLEVBQUMsZ0JBQS9HO0FBQWtJVixhQUFXLEVBQUU7QUFBL0ksQ0FIMEIsRUFJMUI7QUFBRU8sV0FBUyxFQUFFLFdBQWI7QUFBMEJDLEtBQUcsRUFBQyxJQUE5QjtBQUFtQ0csU0FBTyxFQUFDLFdBQTNDO0FBQXdERixjQUFZLEVBQUUsaUJBQXRFO0FBQXlGQyxVQUFRLEVBQUMsb0JBQWxHO0FBQXdIVixhQUFXLEVBQUM7QUFBcEksQ0FKMEIsRUFLMUI7QUFBRU8sV0FBUyxFQUFFLFdBQWI7QUFBMEJDLEtBQUcsRUFBQyxJQUE5QjtBQUFtQ0csU0FBTyxFQUFDLFdBQTNDO0FBQXdERixjQUFZLEVBQUUsTUFBdEU7QUFBOEVDLFVBQVEsRUFBQywwQkFBdkY7QUFBbUhWLGFBQVcsRUFBQztBQUEvSCxDQUwwQixFQU0xQjtBQUFFTyxXQUFTLEVBQUUsV0FBYjtBQUEwQkMsS0FBRyxFQUFDLElBQTlCO0FBQW1DRyxTQUFPLEVBQUMsV0FBM0M7QUFBd0RGLGNBQVksRUFBRSxtQkFBdEU7QUFBMkZDLFVBQVEsRUFBQyxrQkFBcEc7QUFBd0hWLGFBQVcsRUFBQztBQUFwSSxDQU4wQixDQUFyQjtBQVNBLElBQU1ZLGtCQUFrQixHQUFHLENBQ2hDO0FBQUVILGNBQVksRUFBRSxrRkFBaEI7QUFBb0dJLE9BQUssRUFBQztBQUExRyxDQURnQyxFQUVoQztBQUFFSixjQUFZLEVBQUUsb0RBQWhCO0FBQXNFSSxPQUFLLEVBQUM7QUFBNUUsQ0FGZ0MsRUFHaEM7QUFBRUosY0FBWSxFQUFFLG9EQUFoQjtBQUFzRUksT0FBSyxFQUFDO0FBQTVFLENBSGdDLEVBSWhDO0FBQUVKLGNBQVksRUFBRSxtREFBaEI7QUFBcUVJLE9BQUssRUFBQztBQUEzRSxDQUpnQyxDQUEzQiIsImZpbGUiOiIuL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdNZWV0dXJlJyxcbiAgICBkZXNjcmlwdGlvbjogXCLoppPotqNNZWV0dXJlIOaYr+mHneWwjemVt+i8qeaXj+e+pOioreioiOeahOa0u+WLleWPg+iIh+W5s+WPsO+8jOS4puaQremFjeS6kuWLleW8j+WcsOWclu+8jOaPkOWNh+mVt+i8qeWPg+iIh+aItuWklua0u+WLleeahOWLleWKm+WPiuWRqOWcjeWFrOWFseeSsOWig+WTgeizquOAguW4jOacm+W5q+WKqemVt+i8qeWAkeaOpei7jOenkeaKgOeUouWTgeOAgeaPkOWNh+a0u+WLleWPg+iIh+W6pu+8jOmAsuiAjOa0u+e1oeWAi+S6uuiIh+eSsOWig+S5i+mWk+eahOmXnOS/guOAguW4jOacm+mAj+mBjuaPkOS+m+Wkmuaoo+eahOa0u+WLleizh+ioiuOAgeWJtemAoOepuumWk+iIh+WAi+S6uueahOWbnuaGtumMhO+8jOeCuumVt+i8qeWAkeeahOmAgOS8keeUn+a0u++8jOa/gOebquabtOWkmueBq+iKseOAglwiLFxuICAgIGltYWdlOiAnL3Byb2plY3RfZ2lmL21lZXR1cmUuZ2lmJyxcbiAgICB0YWdzOiBbJ1Z1ZS5qcycsJ0RqYW5nbycsJ0xpbmUgT0F1dGgnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vSENJVGVhbU9uZS9NZWV0dXJlV2ViRnJvbnRlZCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vSENJVGVhbU9uZS9NZWV0dXJlV2ViRnJvbnRlZCcsXG4gICAgaWQ6IDEsXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiAnUGh1YmJlci1Qb2ludCcsXG4gICAgZGVzY3JpcHRpb246IFwiUGh1YmJlci1Qb2ludCDmmK/ph53lsI3ppJDlu7PnmoTpm4bpu57ns7vntbHvvIznlbbpoaflrqLlgZzmraLkvb/nlKjmiYvmqZ/mmYLvvIzpm4bpu57pgJ/luqbmnIPljbPmmYLnmoTliqDlv6vvvIzpgLLogIzkv4Pkvb/poaflrqLlnKjppJDmoYzkuIrlpJroiIflrrbkurrmiJbmnIvlj4vkuqTmtYHvvIzmuJvlsJHnp5HmioDlhrfmvKDnmoTnj77osaHjgILogIzpu57mlbjlj6/ku6Xmi7/kvobmj5vlj5bppJDpu57jgILlkIzmmYLvvIzpm4bpu57pgJ/luqbkuZ/lsIfpmqjokZfnlKjppJDmmYLplpPpgZ7muJvvvIzpgLLogIzlop7liqDmj5vmoYznjofjgIJcIixcbiAgICBpbWFnZTogJy9wcm9qZWN0X2dpZi9waHViYmVyLXBvaW50LmdpZicsXG4gICAgdGFnczogWydSZWFjdCBOYXRpdmUnLCAnRXhwbycsICdEamFuZ28nXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vRGFuaWVsVHNjaGFuZy9QaHViYmVyLVBvaW50LVJlYWN0LU5hdGl2ZScsXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vRGFuaWVsVHNjaGFuZy9QaHViYmVyLVBvaW50LVJlYWN0LU5hdGl2ZScsXG4gICAgaWQ6IDAsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHN0YXJ0dGltZTogJzIwMjMgLyAwMycsIGVuZDpmYWxzZSxvcmdhbml6YXRpb246ICdNODAwIHwgQ2lubm94JywgcG9zaXRpb246J1NvZnR3YXJlIEVuZ2luZWVyJyAsIGRlc2NyaXB0aW9uOiAnMS4gUGFydGljaXBhdGVkIGluIGRldmVsb3BpbmcgV2ViUlRDIG1lZGlhIHNlcnZlci4gTWFpbmx5IHJlc3BvbnNpYmxlIGZvciB0aGUgcnRwIHBhY2tldCBoYW5kbGluZyBhbmQgYXVkaW8vdmlkZW8gcmVjb3JkaW5nLlxcbicgK1xuICAgICAgICAnMi4gUmVmYWN0b3JlZCBhbmQgcmVjb25zdHJ1Y3RlZCB0aGUgQ2FsbCBtb25pdG9yaW5nIHN5c3RlbSB3aGljaCBpbnN0YW50bHkgdHJpZ2dlcnMgYWxlcnQgd2hlbiBjb3N0dW1lcnMgY29udGludW91c2x5IG1ha2luZyBwb3RlbnRpYWwgc3BhbSBjYWxscy4gSW50ZWdyYXRlZCB3aXRoIENpbm5veC4nfSxcbiAgeyBzdGFydHRpbWU6ICcyMDIwIC8gMDknLCBlbmQ6dHJ1ZSxlbmR0aW1lOicyMDIyIC8gMDgnLG9yZ2FuaXphdGlvbjogJ05hdGlvbmFsIFRzaW5nIEh1YSBVbml2ZXJzaXR5JywgcG9zaXRpb246J01hc3RlciBTdHVkZW50JyAsIGRlc2NyaXB0aW9uOiAnSW5zdGl0dXRlIG9mIEluZm9ybWF0aW9uIFN5c3RlbSBhbmQgQXBwbGljYXRpb25zIC0gQ29tcHV0ZXIgU2NpZW5jZSd9LFxuICB7IHN0YXJ0dGltZTogJzIwMjAgLyAwNycsIGVuZDp0cnVlLGVuZHRpbWU6JzIwMjIgLyAwOCcgLG9yZ2FuaXphdGlvbjogJ0FjYWRlbWlhIFNpbmljYScsIHBvc2l0aW9uOidSZXNlYXJjaCBBc3Npc3RhbnQnLCBkZXNjcmlwdGlvbjonSW5zdGl0dXRlIG9mIEluZm9ybWF0aW9uIFNjaWVuY2UgLSBJbnRlbGxpZ2VudCBBZ2VudCBTeXN0ZW1zIExhYiAnIH0sXG4gIHsgc3RhcnR0aW1lOiAnMjAyMCAvIDAzJywgZW5kOnRydWUsZW5kdGltZTonMjAyMCAvIDA3Jywgb3JnYW5pemF0aW9uOiAnRDhBSScsIHBvc2l0aW9uOidTb2Z0d2FyZSBFbmdpbmVlciBJbnRlcm4nLCBkZXNjcmlwdGlvbjonIFJlYWN0LmpzJyB9LFxuICB7IHN0YXJ0dGltZTogJzIwMTUgLyAwOScsIGVuZDp0cnVlLGVuZHRpbWU6JzIwMTkgLyAwNicgLG9yZ2FuaXphdGlvbjogJ0Z1LWplbiBVbml2ZXJzaXR5JywgcG9zaXRpb246J0JhY2hlbG9yIFN0dWRlbnQnLCBkZXNjcmlwdGlvbjonTWFqb3IgaW4gU3RhdGlzdGljIGFuZCBJbmZvcm1hdGlvbiBTY2llbmNlJyB9XG5dO1xuXG5leHBvcnQgY29uc3QgQWNvbXBsaXNobWVudHNEYXRhID0gW1xuICB7IG9yZ2FuaXphdGlvbjogJ0xvbmdldml0eS1SZWFkeSBFbnZpcm9ubWVudHM6IFJldGhpbmtpbmcgUGh5c2ljYWwgU3BhY2VzIGZvciBDZW50dXJ5LUxvbmcgTGl2ZXMgJywgYXdhcmQ6J0FkdmFuY2VkIHRvIGZpcnN0IHJvdW5kIGN1cnJlbnRseSwgVG8gYmUgQ29udGludWVkLi4uJ30sXG4gIHsgb3JnYW5pemF0aW9uOiAnQUkgQ1VQIC0gRGUtaWRlbnRpZmljYXRpb24gb2YgbWVkaWNhbCBpbmZvcm1hdGlvbiAnLCBhd2FyZDonVG9wIDEwJSBBY2N1cmFjeSwgIDM5LyA1MzEnfSxcbiAgeyBvcmdhbml6YXRpb246ICdBVENDIC0gTmF0aW9uYWwgQ29sbGVnZSBCdXNpbmVzcyBDYXNlIENvbXBldGl0aW9uICcsIGF3YXJkOidTdXJ2ZXlDYWtlIFRlYW0gLSBGaW5hbCBSb3VuZCd9LFxuICB7IG9yZ2FuaXphdGlvbjogJ1VuZGVyZ3JhZHVhdGUgUmVzZWFyY2ggLSBBbmFseXNpbmcgQml0Y29pbiBGbG9hdCAnLCBhd2FyZDonU2Vjb25kIFBsYWNlIG9mIG91ciBkZXBhcnRtZW50J30sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});