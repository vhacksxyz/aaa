"use strict";
exports.id = 461;
exports.ids = [461];
exports.modules = {

/***/ 278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(764);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_3__);




function Footer() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "socials",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: "yt",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillYoutube, {
                            size: "2rem",
                            color: "white",
                            className: "icons"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: "ds",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsDiscord, {
                            size: "1.7rem",
                            color: "white",
                            className: "icons"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: "tg",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiTelegram, {
                            size: "1.7rem",
                            color: "white",
                            className: "icons"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Copyright \xa9 2022 ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        children: "VHACKS ™"
                    }),
                    "All Rights Reserved."
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(98);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(41);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "country-flag-icons/react/3x2"
var _3x2_ = __webpack_require__(400);
;// CONCATENATED MODULE: ./src/components/Flag.js



function Flag() {
    const { 0: on , 1: setOn  } = (0,external_react_.useState)(false);
    const { 0: lang , 1: setLang  } = (0,external_react_.useState)('US');
    const switcher = (props)=>{
        setLang(props);
        setOn(false);
    };
    const flaag = /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flag",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>switcher('US')
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
                            className: "flags"
                        }),
                        "English"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>switcher('RU')
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg",
                            className: "flags"
                        }),
                        "Russian"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>switcher('SA')
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "http://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg",
                            className: "flags"
                        }),
                        "Arabic"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>switcher('TR')
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg",
                            className: "flags"
                        }),
                        "Turkey"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>switcher('CN')
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg",
                            className: "flags"
                        }),
                        "China"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>switcher('VN')
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "http://purecatamphetamine.github.io/country-flag-icons/3x2/VN.svg",
                            className: "flags"
                        }),
                        "Vietnam"
                    ]
                })
            ]
        })
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: `http://purecatamphetamine.github.io/country-flag-icons/3x2/${lang}.svg`,
                className: "default",
                onClick: ()=>setOn(!on)
            }),
            on && flaag
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/Header.js






function Header() {
    const { 0: openMenu , 1: setOpenMenu  } = (0,external_react_.useState)(false);
    const close = /*#__PURE__*/ jsx_runtime_.jsx(ri_.RiMenuLine, {
        color: "white",
        size: "2em",
        className: "hmenu",
        onClick: ()=>setOpenMenu(!openMenu)
    });
    const open = /*#__PURE__*/ jsx_runtime_.jsx(md_.MdClose, {
        color: "white",
        size: "2em",
        className: "hmenu",
        onClick: ()=>setOpenMenu(!openMenu)
    });
    const menu = /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "menu",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Games"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Reviews"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Discord"
                })
            ]
        })
    });
    const links = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "links",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                children: "Games"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                children: "Reviews"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                children: "Discord"
            })
        ]
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: '/images/vlogo.png',
                className: "vlogo",
                width: 150,
                height: 100
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Vhacks"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Flag, {}),
            links,
            openMenu && menu,
            openMenu ? open : close
        ]
    }));
};


/***/ }),

/***/ 854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


function SEO(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: `${props.title}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "initial-scale=1.0, width=device-width"
            })
        ]
    }));
};


/***/ })

};
;