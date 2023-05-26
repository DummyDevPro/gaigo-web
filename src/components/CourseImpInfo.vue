<template>
    <div class="course-imp-info text-danger m-b-5">
        <div class="d-flex align-items-center">
            日本語学校卒業生対象
        </div>
        <div class="">
            <table>
                <tr>
                    <td>
                        <span>
                            <span>修</span>
                            <span>業</span>
                            <span>年</span>
                            <span>限</span>
                        </span>
                    </td>
                    <td>
                        <span>
                            <span>：</span>
                            <span>2</span>
                            <span>年</span>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>
                            <span>定</span>
                            <span>員</span>
                        </span>
                    </td>
                    <td>
                        <span>
                            <span>：</span>
                            <span>20</span>
                            <span>名</span>
                        </span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style>
.course-imp-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: .5rem;
    font-size: .8rem;
    font-weight: bold;

    background-color: var(--color-pale-g-web);
}

table td>span {
    display: flex;
    justify-content: space-between;
}
</style>