const API_URL = 'https://api.dapp.enrex.io/'
const BASE_URL = 'https://assets.enrex.io/badget/'
function webGreenWidget() {
    // ....

    let {
        badgetWidth,
        badgetHeight,
        circleTop,
        circleHeigth,
        iconFont,
        energyTop,
        textBoxFont1,
        textBoxFont2,
        textBoxFont3,
        textBoxFont4,
        textBoxFont5,
        textBoxFont6,
        textBoxTop,
        textBoxSpace,
        textBoxSpace2,
        textBoxSpace3,
        badgetboxHeight,
        badgetTextHeight,
        badgetHeightOffset,
    } = widthDependantParameters() //stands for Web-Mobile Variables

    var widgetSide =
        document.getElementById('badget').getAttribute('side') === 'right' ? 'right' : 'left'

    document.getElementById(
        'badget'
    ).style.cssText = `width:${badgetboxHeight}px; height:${badgetboxHeight}px; display:inline; margin:0px; border-radius:50%; background-color:#37CCC8; position:fixed; bottom:15px; z-index:1000000001; box-shadow: 0px 3px 6px #49596B26; cursor: pointer;`

    if (widgetSide === 'right') {
        document.getElementById('badget').style.cssText += 'right: 15px;'
    } else {
        document.getElementById('badget').style.cssText += 'left: 15px;'
    }

    let leaf = document.createElement('img')

    //--testing urls-- (comment before commiting!)
    //    let BASE_URL = 'https://assets-test.enrex.io/badget/';
    //    let API_URL = 'http://localhost:8000/'
    //----
    let IMG_URL = `${BASE_URL}images/`
    let LANGUAGE_URL = `${BASE_URL}languages/`

    leaf.src = `${IMG_URL}icon-leaf.svg`
    leaf.style.cssText = 'display: block; margin:auto; position:relative; top:16px; z-index:100;'
    document.getElementById('badget').appendChild(leaf)

    var badgetOpened = false
    var badgetAnimating = false
    var kwh
    var co2
    var badgetUrl
    var badgetCups
    var badgetAnimation = null
    var badgetFloatBoxWidth = 60
    var badgetFloatBoxOpacity = 0
    var badgetBoxAnimation = null
    var badgetBoxOpacity = 0
    var boxArray = []
    var badgetBox
    var whiteBox
    var energyIcon
    var energyTextBox
    var coalIcon
    var coalTextBox
    var circle
    var textBox1
    var textBox2
    var teaCupBox
    var textBox3
    var textBox4
    var textBox5
    var dashedLine
    var textBox6
    var exrexBox
    var active
    var widgetText
    let BadgetHoverBox = document.getElementById('badget-hover-box')

    document.getElementById('badget').addEventListener('click', function () {
        if (badgetAnimating) {
            return
        }
        badgetAnimating = true
        if (active === 'false') {
            window.location = 'https://greeningweb.com/'
            return
        }

        if (!badgetOpened) {
            boxArray = []

            badgetBox = document.getElementById('badget-box')
            badgetBox.style.cssText = `width:${badgetWidth}px; height:${badgetHeight}px; background-color: #54D3D0; position:fixed; bottom:80px; border-radius: 16px; box-shadow: 0px 3px 6px #49596B33; opacity: 0; z-index:1000000000`

            if (widgetSide === 'right') {
                badgetBox.style.cssText += 'right: 15px;'
            } else {
                badgetBox.style.cssText += 'left: 15px;'
            }
            boxArray.push(badgetBox)

            whiteBox = document.createElement('span')
            whiteBox.style.cssText = `margin: 0px; display: inline; width:${badgetWidth}px; height:${circleHeigth}px; background-color:white; border-radius: 16px 16px 40px 40px; margin: 0px; position:absolute; box-shadow: 0px 3px 6px #49596B33; opacity: 0;`
            document.getElementById('badget-box').appendChild(whiteBox)
            boxArray.push(whiteBox)

            energyIcon = document.createElement('p')
            energyIcon.style.cssText = `margin: 0px; display: inline; width: 100%; font: normal normal normal ${iconFont} Bebas Neue; letter-spacing: 0px; color: #49596B; text-align: center; z-index: 100 !important; position: absolute; left:0px; top:${energyTop}px; opacity: 0;`
            energyIcon.innerHTML = '⚡ <br>' + (kwh * 1000).toFixed(4) + ' Wh'
            whiteBox.appendChild(energyIcon)
            boxArray.push(energyIcon)

            coalIcon = document.createElement('p')
            coalIcon.style.cssText = `margin: 0px; display: inline; width: 100%; font: normal normal normal ${iconFont} Bebas Neue; letter-spacing: 0px; color: #49596B; text-align: center; z-index: 100 !important; position: absolute; left:0px; top:10px; opacity: 0;`
            coalIcon.innerHTML = '☁️ <br>' + co2 + ' g of CO<sub>2</sub>'
            whiteBox.appendChild(coalIcon)
            boxArray.push(coalIcon)

            circle = document.createElement('img')
            circle.src = `${IMG_URL}icon-circle.svg`
            circle.style.cssText = `margin: 0px; display: inline; margin:auto; position:absolute; left: 56px; top:${circleTop}px; opacity: 0;height: ${circleHeigth}px;`
            whiteBox.appendChild(circle)
            boxArray.push(circle)

            textBox1 = document.createElement('p')
            textBox1.style.cssText = `margin: 0px; display: inline; width: 100%; font: normal normal bold ${textBoxFont1} Josefin; letter-spacing: 0px; color: #49596B; text-align: center; position:absolute; left:0px; top:calc(120px - ${textBoxTop}px); opacity: 0;`
            textBox1.innerHTML = widgetText?.LEDText1
            whiteBox.appendChild(textBox1)
            boxArray.push(textBox1)

            textBox2 = document.createElement('p')
            textBox2.style.cssText = `margin: 0px; display: inline; width: 100%; font: normal normal normal ${textBoxFont2} Bebas Neue; letter-spacing: 0px; color: #49596B; text-align: center; position:absolute; left:0px; top:calc(144px - ${textBoxTop}px); opacity: 0;`
            let LEDlightMinutes = kwh * 1000 * 6
            if (LEDlightMinutes < 1) {
                textBox2.innerHTML = LEDlightMinutes.toFixed(2) + `${widgetText?.LEDText2} <br/> 💡`
            } else {
                textBox2.innerHTML =
                    Math.floor(LEDlightMinutes) + `${widgetText?.LEDText2} <br/> 💡`
            }
            whiteBox.appendChild(textBox2)
            boxArray.push(textBox2)

            textBox3 = document.createElement('p')
            textBox3.style.cssText = `margin: 0px; display: inline-block; width: 100%; font: normal normal 900 ${textBoxFont3} Josefin; letter-spacing: 0px; color: #49596B; text-align: center; margin-top: calc(240px - ${textBoxSpace}px); opacity: 0;`
            if (badgetUrl.includes('https')) {
                textBox3.innerHTML = badgetUrl.substring(8).split('/')[0]
            } else if (badgetUrl.includes('https')) {
                textBox3.innerHTML = badgetUrl.substring(7).split('/')[0]
            } else {
                textBox3.innerHTML = badgetUrl.split('/')[0]
            }
            document.getElementById('badget-box').appendChild(textBox3)
            boxArray.push(textBox3)

            textBox4 = document.createElement('p')
            textBox4.style.cssText = `margin: 0px; display: inline; width: 100%; font: normal normal  bold ${textBoxFont4} Josefin; letter-spacing: 0px; color: #49596B; text-align: center; position:absolute; left:0px; top:calc(269px - ${textBoxSpace}px); opacity: 0;`
            textBox4.innerHTML = `${widgetText?.reason} 🌎`
            document.getElementById('badget-box').appendChild(textBox4)
            boxArray.push(textBox4)

            textBox5 = document.createElement('p')
            textBox5.style.cssText = `margin: 0px; display: inline; width: 100%; font: normal normal ${textBoxFont5} Josefin; letter-spacing: 0px; color: #49596B; text-align: center; position:absolute; left:0px; top:calc(340px - ${textBoxSpace2}px); opacity: 0;`
            textBox5.innerHTML = widgetText?.description
            document.getElementById('badget-box').appendChild(textBox5)
            boxArray.push(textBox5)

            dashedLine = document.createElement('pr')
            dashedLine.style.cssText =
                'display: inline; width:100%; height:1px; position:absolute; top:385px; left:0px; background-color:white; opacity: 0.5;'
            document.getElementById('badget-box').appendChild(dashedLine)
            // boxArray.push(dashedLine);

            textBox6 = document.createElement('p')
            textBox6.style.cssText = `margin: 0px; display: inline; width: 100%; font: normal normal normal ${textBoxFont6} Josefin; letter-spacing: 0px; color: #49596B; text-align: center; position:absolute; left:0px; top:calc(405px - ${textBoxSpace3}px); opacity: 0;`
            textBox6.innerHTML = widgetText?.linkToWebsite
            document.getElementById('badget-box').appendChild(textBox6)
            boxArray.push(textBox6)

            exrexBox = document.createElement('p')
            exrexBox.style.cssText = `margin: 0px; display: inline; font: normal normal normal 12px/18px Josefin; letter-spacing: 0px; color: #49596B; text-align: center; position:absolute; left:93px; top:calc(425px - ${textBoxSpace3}px); opacity: 0;`
            exrexBox.innerHTML =
                'powered by <a href="https://enrex.io/" style="text-decoration: none; color: #49596B; padding-left: 3px;"><img style="position:relative; top:3px;" src="' +
                IMG_URL +
                'icon-enrex.svg" ></img></a>'
            document.getElementById('badget-box').appendChild(exrexBox)
            boxArray.push(exrexBox)

            leaf.src = `${IMG_URL}icon-x.svg`
            leaf.style.cssText = 'display: block; margin:auto; position:relative; top:19px;'
            badgetOpened = true

            clearInterval(badgetBoxAnimation)
            badgetBoxAnimation = setInterval(badgetBoxFadeIn, 10)
        } else {
            leaf.src = `${IMG_URL}icon-leaf.svg`
            leaf.style.cssText = 'display: block; margin:auto; position:relative; top:16px;'

            clearInterval(badgetBoxAnimation)
            badgetBoxAnimation = setInterval(badgetBoxFadeOut, 10)
            badgetOpened = false
        }
    })

    function WidgetToolTipCss(opacity) {
        BadgetHoverBox.style.cssText = `display:inline; width:${badgetWidth}px; height:${badgetboxHeight}px; margin:0px; background-color: white; position:fixed; bottom:15px; ${widgetSide}:15px; border-radius: 40px; box-sizing: border-box; border: 2px solid #37CCC8; text-align: left; font: normal normal normal ${widgetText?.statusMessageSize}px/16px Bebas Neue; color:#49596B; overflow:hidden; opacity:${opacity}; z-index: 1000000;`
        let inverseWidgetSide = widgetSide === 'right' ? 'left' : 'right'

        BadgetHoverBox.innerHTML = `<span style="position:absolute; ${inverseWidgetSide}:0px; top:calc(22px - ${badgetTextHeight}px); white-space: nowrap; width: 270px; text-align: center;">${widgetText?.statusMessage}</span>`
    }

    function InactiveWidgetToolTipCss(opacity) {
        BadgetHoverBox.style.cssText = `display:inline; width:${badgetWidth}px; height:${badgetboxHeight}px; margin:0px; background-color: white; position:fixed; bottom:15px; ${widgetSide}:15px; border-radius: 40px; box-sizing: border-box; border: 2px solid #37CCC8; text-align: left; font: normal normal normal ${widgetText?.statusMessageSize}px/16px Bebas Neue; color:#49596B; overflow:hidden; opacity:${opacity}; z-index: 1000000;`
        let inverseWidgetSide = widgetSide === 'right' ? 'left' : 'right'

        BadgetHoverBox.innerHTML = `<span style="position:absolute; ${inverseWidgetSide}:0px; top:calc(22px - ${badgetTextHeight}px); white-space: nowrap; width: 270px; text-align: center;">${widgetText?.inactiveMessage}</span>`
    }

    let request = new XMLHttpRequest()

    request.open(
        'GET',
        `${API_URL}badget?id=` + document.getElementById('badget').getAttribute('name')
    )
    request.send()
    request.onload = () => {
        if (request.status === 200) {
            let responseData = JSON.parse(request.response)
            active = responseData.activeWidget

            setText(!responseData.language ? 'en' : responseData.language)

            if (active === 'false') {
                setTimeout(function () {
                    InactiveWidgetToolTipCss(0)
                    badgetAnimation = setInterval(badgetToolTipFadeIn, 10)
                }, 3000)
                setTimeout(function () {
                    badgetAnimation = setInterval(badgetToolTipFadeOut, 10)
                    document.getElementById('badget').addEventListener('mouseenter', function () {
                        InactiveWidgetToolTipCss(1)
                        {
                            leaf.src = `${IMG_URL}icon-info.svg`
                        }
                    })
                    document.getElementById('badget').addEventListener('mouseleave', function () {
                        BadgetHoverBox.style.cssText = ''
                        BadgetHoverBox.innerHTML = ''
                        {
                            leaf.src = `${IMG_URL}icon-leaf.svg`
                        }
                    })
                }, 5000)
            } else {
                setTimeout(function () {
                    WidgetToolTipCss(0)
                    badgetAnimation = setInterval(badgetToolTipFadeIn, 10)
                }, 3000)
                setTimeout(function () {
                    badgetAnimation = setInterval(badgetToolTipFadeOut, 10)
                    document.getElementById('badget').addEventListener('mouseenter', function () {
                        WidgetToolTipCss(1)
                        if (!badgetOpened) {
                            leaf.src = `${IMG_URL}icon-info.svg`
                        }
                    })
                    document.getElementById('badget').addEventListener('mouseleave', function () {
                        BadgetHoverBox.style.cssText = ''
                        BadgetHoverBox.innerHTML = ''
                        if (!badgetOpened) {
                            leaf.src = `${IMG_URL}icon-leaf.svg`
                        }
                    })
                }, 5000)
                kwh = responseData.kwh
                co2 = responseData.co2
                badgetUrl = responseData.url
                badgetCups = responseData.cups
            }
        } else {
            console.log('Error' + request.status + request.statusText)
        }
    }

    async function setText(language) {
        let request = new XMLHttpRequest()

        request.open('GET', `${LANGUAGE_URL}${language}.json`)
        request.send()
        request.onload = () => {
            if (request.status === 200) {
                widgetText = JSON.parse(request.response)
            } else {
                console.log('Error' + request.status + request.statusText)
            }
        }
    }

    function badgetToolTipFadeIn() {
        if (badgetFloatBoxOpacity >= 1) {
            clearInterval(badgetAnimation)
        } else {
            badgetFloatBoxOpacity += 0.05
            if (badgetFloatBoxOpacity > 1) {
                badgetFloatBoxOpacity = 1
            }
            BadgetHoverBox.style.opacity = badgetFloatBoxOpacity + ''
        }
    }

    function badgetToolTipFadeOut() {
        if (badgetFloatBoxOpacity <= 0) {
            clearInterval(badgetAnimation)
        } else {
            badgetFloatBoxOpacity -= 0.05
            if (badgetFloatBoxOpacity < 0) {
                badgetFloatBoxOpacity = 0
            }
            BadgetHoverBox.style.opacity = badgetFloatBoxOpacity + ''
        }
    }

    function badgetBoxFadeOut() {
        if (badgetBoxOpacity <= 0) {
            clearInterval(badgetBoxAnimation)
            const badgetBox = document.getElementById('badget-box')
            while (badgetBox.firstChild) {
                badgetBox.removeChild(badgetBox.lastChild)
                document.getElementById('badget-box').style.cssText = ''
            }
            badgetAnimating = false
        } else {
            badgetBoxOpacity -= 0.05
            if (badgetBoxOpacity < 0) {
                badgetBoxOpacity = 0
            }
            for (var i = 0; i < boxArray.length; i++) {
                boxArray[i].style.opacity = badgetBoxOpacity + ''
            }
        }
    }

    function badgetBoxFadeIn() {
        if (badgetBoxOpacity >= 1) {
            clearInterval(badgetBoxAnimation)
            badgetAnimating = false
        } else {
            badgetBoxOpacity += 0.05
            if (badgetBoxOpacity > 1) {
                badgetBoxOpacity = 1
            }
            for (var i = 0; i < boxArray.length; i++) {
                boxArray[i].style.opacity = badgetBoxOpacity + ''
            }
        }
    }
}
function isWidgetMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
}
function widthDependantParameters() {
    let dynamicParams
    if (window.screen.width > 780 || !isWidgetMobile()) {
        dynamicParams = {
            badgetWidth: 340,
            badgetHeight: 455,
            circleTop: -103,
            circleHeigth: 220,
            iconFont: '24px/31px',
            energyTop: -80,

            textBoxFont1: '16px/26px',
            textBoxFont2: '24px/30px',
            textBoxFont3: '16px/24px',
            textBoxFont4: '14px/22px',
            textBoxFont5: '12px/18px',
            textBoxFont6: '12px/18px',
            textBoxTop: 0,
            textBoxSpace: 0,
            textBoxSpace2: 0,
            textBoxSpace3: 0,
            badgetboxHeight: 58,
            badgetTextHeight: 0,
            badgetHeightOffset: 575,
        }
    } else {
        dynamicParams = {
            badgetWidth: 300,
            badgetHeight: 395,
            circleTop: -90,
            circleHeigth: 190,
            iconFont: '20px/27px',
            energyTop: -70,

            textBoxFont1: '14px/20px',
            textBoxFont2: '20px/27px',
            textBoxFont3: '14px/20px',
            textBoxFont4: '12px/18px',
            textBoxFont5: '11px/15px',
            textBoxFont6: '11px/16px',
            textBoxTop: 20,
            textBoxSpace: 30,
            textBoxSpace2: 50,
            textBoxSpace3: 60,
            badgetboxHeight: 50,
            badgetTextHeight: 5,
            badgetHeightOffset: 583,
        }
    }
    return dynamicParams
}
webGreenWidget()
