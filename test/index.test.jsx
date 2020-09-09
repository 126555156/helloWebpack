import React from 'react'
import { render, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../src/pages/jsPage/App'

configure({ adapter: new Adapter() })

function mountTest (Component) {
  describe('mount and unmount', () => {
    // https://github.com/ant-design/ant-design/pull/18441
    it('component could be updated and unmounted without errors', () => {
      const wrapper = mount(<Component />)
      expect(() => {
        wrapper.setProps({})
        wrapper.unmount()
      }).not.toThrow()
    })
  })
}

describe('基本测试', () => {
  mountTest(App)
  it('renders correctly', () => {
    const wrapper = render(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
