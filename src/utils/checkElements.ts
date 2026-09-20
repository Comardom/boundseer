function isVisible(e:Element):boolean {
    const style = window.getComputedStyle(e);
    return !(
        style.visibility === "hidden"
        || style.display === "none"
        || e.getClientRects().length === 0
    );
}
function getNumOfVisibleElements():number {
    const body = document.body;
    if (!body) {
        return 0;
    }
    // 同时取body和body子元素
    const elements = [
        document.body,
        ...document.body.querySelectorAll('*'),
    ];
    // 记录一共改变了多少元素
    let elementCount = 0;
    for(const e of elements) {
        if(isVisible(e)) {
            elementCount++;
        }
    }
    return elementCount;
}

export {isVisible, getNumOfVisibleElements};