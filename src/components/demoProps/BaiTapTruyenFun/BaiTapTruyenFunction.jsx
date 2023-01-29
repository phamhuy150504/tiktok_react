import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'

export default class BaiTapTruyenFunction extends Component {

  render() {
    return (
      <div className='container'>
        <h3 className='text-center'>Bai Tap Truyen Function React</h3>
        <DanhSachSanPham  />
      </div>
    )
  }
}
