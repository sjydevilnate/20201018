import React from 'react'

class CrudInput extends React.Component {

    state = {

    }
    constructor(props) {
        super()
        // this 바인딩
        // ref 만들기
        this.refUserName = React.createRef()
        this.refUserPower = React.createRef()
    }
    doIns = (event)=>{
        // 이벤트 핸들러는 화살표 함수로 만들면 this를 bind() 생략해도 된다
        console.log(event.target)//
        
        // ref 를 사용하여 현재 입력된 값을 가져온다.
        //const name = this.refUserName.current.value
        //const power = Number(this.refUserPower.current.value)
        const newitem = {
            id: null,
            name: this.refUserName.current.value,
            power: Number(this.refUserPower.current.value),
        }
        this.props.doIns(newitem) // CrudApp.func.doIns(newitem) 호출
    }
    render() {
        return (
            <div>
                <h1>Creat Read Update Delete</h1>
                <div>
                    <label htmlFor="">Name : </label>                        
                    <input type="text"
                        name="name"
                        ref={this.refUserName}
                    />
                </div>
                <div>
                    <label htmlFor="">Power : </label>                        
                    <input type="text"
                        name="power"
                        ref={this.refUserPower}
                    />
                </div>
                <button onClick={this.doIns}>Add</button>
                <hr/>
            </div>
        )
    }
}

export default CrudInput