import React, { Component } from 'react';
import './burger.css'
import { connect } from 'react-redux';
class BaiTapOrderBurger extends Component {

    renderBodyBurger = () => {
        let { burger } = this.props;

        let content = [];

        for (let propsBurger in burger) {
            let bodyBurger = [];
            for (let i = 0; i < burger[propsBurger]; i++) {
                bodyBurger.push(<div key={i} className={propsBurger}></div>)
            }
            content.push(bodyBurger);
        }
        return content;
    }

    renderMenu = () => {
        let { menu, burger } = this.props;
        let menuList = [];
        for (let menuItem in menu) {
            menuList.push(<tr >
                <th style={{ verticalAlign: 'middle' }}>{menuItem}</th>
                <th style={{ verticalAlign: 'middle' }}>
                    <button className="btn btn-primary mr-2" onClick={() => { this.props.addBurgerItem(menuItem, 1) }}>+</button>
                    {burger[menuItem]}
                    <button className="btn btn-primary ml-2" onClick={() => { this.props.addBurgerItem(menuItem, -1)}}>-</button>
                </th>
                <th style={{ verticalAlign: 'middle' }}>{menu[menuItem]}</th>
                <th style={{ verticalAlign: 'middle' }}>{menu[menuItem] * burger[menuItem]}</th>
            </tr>)

        }
        return menuList;
    }

    render() {
        return (
            <div className='text-center'>
                <h3 className='mt-5 text-success'>Bài Tập Order Burger</h3>
                <div className='row'>
                    <div className='col-7'>
                        <div className='breadTop'></div>
                        {this.renderBodyBurger()}
                        <div className='breadBottom'></div>
                    </div>
                    <div className='col-5'>
                        <h3 className='text-center text-success'>Chọn Thức Ăn</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Thức ăn</th>
                                    <th></th>
                                    <th>Đơn giá</th>
                                    <th>Thành Tiền</th>
                                </tr>
                                {this.renderMenu()}
                            </thead>
                            <tfoot className='text-center text-danger'>
                                <td style={{ fontSize: '20px', fontWeight: 'bold' }} colSpan={3}>Tổng Tiền</td>
                                <td style={{ fontSize: '20px', fontWeight: 'bold' }}>{this.props.total} </td>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.BaiTapOrderBurgerReducer.burger,
        menu: state.BaiTapOrderBurgerReducer.menu,
        total: state.BaiTapOrderBurgerReducer.total,
    }
}

const mapDispatchToProps = (ditpatch) => {
    return {
        addBurgerItem: (burgerItem, amount) => {
            const action = {
                type: 'ADD_BURGER_ITEM',
                burgerItem,
                amount
            }
            ditpatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BaiTapOrderBurger)