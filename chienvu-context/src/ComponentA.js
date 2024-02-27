import React, { useState } from 'react'
import ComponentB from './ComponentB'


/*1. Tao ra 3 component ComponentA, ComponentB, ComponentC.
2. Trong do A, B, C nested.
3. Tao mot state la count, setCount trong A.
4. lay lai bien count trong C bang cach truyen props
5. Tao ra mot ham de cong count len 1 don vi
6. Tai C, in ra count va tao 1 button de khi click vao do, count + 1.*/

/*1. tạo 1 context ở file App
2. Bọc ComponentA bởi Context Provider
3. Di chuyển count và các hàm liên quan sang file App
4. Đóng gói value của Provider
5. Update ComponentC để lấy ra Provider value8*/

const ComponentA = () => {
    const [count, setCount] = useState(0);
    const increaseCountByOne = () => setCount((prev) => prev + 1);

    return (
        <div>
            <ComponentB count={count} increaseCountByOne={increaseCountByOne} />
        </div>
    );
};

export default ComponentA