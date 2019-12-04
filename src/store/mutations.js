let mutations={ //提交状态修改 也就是set
    SET_TITLE: (state, action) => {
        state.browserHeaderTitle = action.browserHeaderTitle
    }
}
export default mutations