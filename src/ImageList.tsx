import * as React from 'react'
import * as ReactDom from 'react-dom'
import "./ImageList.sass"

let urls = [
    "https://c.imgz.jp/960/43962960/43962960_1_d_500.jpg"  ,
    "https://c.imgz.jp/960/43962960/43962960_8_d_500.jpg"  ,
    "https://c.imgz.jp/960/43962960/43962960_b_01_500.jpg" ,
    "https://c.imgz.jp/960/43962960/43962960_b_02_500.jpg" ,
    "https://c.imgz.jp/960/43962960/43962960_b_03_500.jpg" ,
    "https://c.imgz.jp/960/43962960/43962960_b_04_500.jpg" ,
    "https://c.imgz.jp/960/43962960/43962960_b_05_500.jpg" ,
    "https://c.imgz.jp/960/43962960/43962960_b_06_500.jpg" ,
    "https://c.imgz.jp/960/43962960/43962960_b_07_500.jpg" ,
    "https://c.imgz.jp/960/43962960/43962960_b_08_500.jpg" ,
    "https://c.imgz.jp/960/43962960/43962960_b_09_500.jpg" ,
];

class ImageList{
    /**
     * <br>
     *
     * @extends ImageList
     * @constructor 
     * @param {} 
     */
    position = 0 
    bigUl
    constructor(target , urls , private width , height){
        const div = document.createElement("div")
        div.className = "ul-wrapper"
        div.style.width = width + "px"
        div.style.height = height + "px"

        const right = document.createElement("div")
        const left = document.createElement("div")

        right.className = "right" 
        left .className = "left" 
        right.innerHTML = ">" 
        left .innerHTML = "<" 
        div.appendChild(right)
        div.appendChild(left)

        right.addEventListener("click" , (e : Event)=>{this.moveRight()})
        left.addEventListener("click" , (e : Event)=>{this.moveLeft()})
        const bigUl = document.createElement("ul")
        const smallUl = document.createElement("ul")

        bigUl  .className = "big-ul"   
        smallUl.className = "small-ul" 
        urls.forEach((url , i)=>{
            const bigLi = document.createElement("li")
            const bigImg = document.createElement("img")
            bigLi .style.width = width + "px"
            bigImg.style.width = width + "px"
            bigLi .style.height = height + "px"
            bigImg.style.height = height + "px"
            bigImg.src = url
            bigLi.appendChild(bigImg)
            bigUl.appendChild(bigLi)

            const smallLi = document.createElement("li")
            smallLi.style.listStyle = "none"
            const smallImg = document.createElement("img")
            smallImg.src = url
            smallLi.appendChild(smallImg)
            smallUl.appendChild(smallLi)

            smallLi.addEventListener("click" , (e : Event)=>{
                this.changePosition(i)
            })
        })

        target.appendChild(div)
        div.appendChild(bigUl)
        target.appendChild(smallUl)

        this.bigUl = bigUl
    }

    moveRight(){
        this.position += 1
        let max = this.bigUl.children.length - 1
        this.changePosition(this.position > max ? max : this.position)
    }

    moveLeft(){
        this.position -= 1
        this.changePosition(this.position < 0 ? 0 : this.position)
    }

    changePosition(position){
        this.position = position
        this.bigUl.style.left = -1 * position * this.width + "px"
    }
}

new ImageList( document.getElementById("target") , urls , 400 , 480)
