import React, { Component } from "react"

export default class AbouUI extends Component {
    render() {
        return (
            <div>
                <div className="download">
                    <img
                        src="http://image.wufazhuce.com/app_download.png"
                        alt="「ONE · 一个」"
                        className="logo" />

                    <p className="mobile-website"><strong>ONE·一个 每日阅读</strong></p>
                </div>
                <p className="about-content">
                    「ONE&nbsp; ·&nbsp; 一个」是韩寒先生监制、原《独唱团》主创共同制作的一款年轻人文艺阅读应用，于2012年10月8日上线，当日就获得了APP&nbsp; STORE总榜第一名。
                    至今已获得了近三千万用户，并维持每天近两百万的活跃独立访问，每一期内容分享逾万次，总阅读量十亿以上。
                    目前「ONE&nbsp; ·&nbsp; 一个」已更新至4.0版本，集合阅读、音乐、电影内容，不仅是流行的新媒体阅读产品，也是极具价值的故事IP发表平台和储备库。
                    <br />

                    ONE·一个APP、网站内所有内容版权均属ONE·一个公司所有，受各国版权法及国际版权公约的保护。任何媒体、网站或个人未经本公司书面协议授权不得转载、链接、转贴或以其他方式复制发布、发表ONE·一个APP、网站内的内容。
                    对于上述版权内容，超越合理使用范畴、并未经本公司书面许可的使用行为，我公司均保留追究法律责任的权利。
                </p>
            </div>
        )
    }
}