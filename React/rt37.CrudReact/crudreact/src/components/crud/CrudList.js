import React from 'react'
import CrudListItem from './CrudListItem'

class CrudList extends React.Component {

    static defaultProps = {  /*  props의 디폴트 값 설정 */  } 
    static propsTypes = {  /* props의 프로퍼티 타입 설정 */ } 
    state = {

    }
    constructor(props) {
        super()
        // this 바인딩
    }
    componentDidMount() {
        // 마운트 완료 후에  : 페이지 load 될 때 한번
    }
    componentDidUpdate(prevProps, prevState) {
        // 업데이트 완료 후에 : 여러번, state 가 변경될 때마다
    }
    componentWillUnmount() {
        // 언마운트 완료 후에 : 페이지 unload 될 때 한번
    }
    handler = (event)=>{
        // 이벤트 핸들러는 화살표 함수로 만들면 this를 bind() 생략해도 된다
        console.log(event.target)//
    }
    render() {
        // CrudApp의 state에는 list 와 user state가 있다. 
        const {list,user} = this.props 
        const arrs = list.map( (item, index)=>{
            return (
                <CrudListItem item={item} key={index} {...this.props}>
                </CrudListItem>
            )
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>POWER</th>
                        <th>CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    {arrs}
                </tbody>
            </table>
        )
    }
}

export default CrudList