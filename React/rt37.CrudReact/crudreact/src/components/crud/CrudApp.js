import React from 'react'
import CrudList from './CrudList'
import CrudInput from './CrudInput'

class CrudApp extends React.Component {
    
    state = {
        user: {
        },
        list: [
            { id: 1, name: "슈퍼맨", power: 100 },
            { id: 2, name: "아쿠아맨", power: 300 },
            { id: 3, name: "스파이더맨", power: 500 },
            { id: 4, name: "배트맨", power: 30 },
        ],
    }
    func = {
        doUp(id){
            // 100씩 증가 
            let mans = this.state.list.filter( (item, index)=>{
                if( item.id == id) {
                    return item.power = Number(item.power) + 100 ;
                }
                
                return item;
            })
            this.setState({
                ...this.state,
                list : mans,
            })
        },
        doDown(id){
            // 50씩 감소 
            let mans = this.state.list.filter((item, index) => {
                if (item.id == id) {
                    return item.power = Number(item.power) - 50;
                }

                return item;
            })
            this.setState({
                ...this.state,
                list: mans,
            })

        },
        doDel(id){
            // 배열에서 삭제 <==> 해당되는 id 값을 제외한 배열 찾기
            let mans = this.state.list.filter((item, index) => {
                if (item.id !== id) {
                    return item;
                }
            })
            this.setState({
                ...this.state,
                list: mans,
            })
        },
        doEdit(newitem){
            debugger;
            let mans = this.state.list.map((item, index) => {
                if (item.id === newitem.id) {
                    return newitem;
                }
                else {
                    return item
                }
            }) 
            this.setState({
                ...this.state,
                list: mans,
            })
        },
        doIns(newitem){
            debugger;
            // this.state.list에서 max(id) 찾기
            if( this.state.list.length>0) {
                const maxobj = this.state.list.reduce(function (prev, next) {
                    /*
                    최대 id 값을 리턴한다.
                    prev = { id: 1, name: "슈퍼맨", power: 100 };
                    next = { id: 2, name: "아쿠아맨", power: 300 };
                    */
                    return prev.id > next.id ? prev : next;
                });
                newitem.id = maxobj.id + 1;
            }
            else {
                newitem.id = 1;
            }

            const newlist = [...this.state.list, newitem]
            this.setState({
                ...this.state,
                list: newlist
            })
        }
    }
    constructor(props) {
        super()
        // this 바인딩
        this.func.doUp   = this.func.doUp.bind(this)
        this.func.doDown = this.func.doDown.bind(this)
        this.func.doDel  = this.func.doDel.bind(this)
        this.func.doEdit = this.func.doEdit.bind(this)
        this.func.doIns = this.func.doIns.bind(this)
    }
    render() {
        return (
            <div>
                <CrudInput {...this.func}
                >
                </CrudInput>
                <CrudList {...this.state}
                            {...this.func}
                >
                </CrudList>
            </div>
        )
    }
}
    
export default CrudApp