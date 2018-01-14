import Mockjs from 'mockjs'
export default Mockjs.mock('/users', {
  'columns|100': [
    {
      'id|+1': 1,
      date: '2016-05-02',
      name: '王小虎',
      'pnum|10000000000-99999999999': 123123,
      address: '上海市普陀区金沙江路 1518 弄',
      stateText: '审核中',
      'state|1': true
    }
  ]
})
