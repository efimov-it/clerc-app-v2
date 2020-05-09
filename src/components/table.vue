<template>
    <table v-if="this.data.length > 0">
        <tr>
            <th v-for="header in Object.keys(this.data[0])"
                :key="header">{{header}}</th>
        </tr>
        <tr v-for="(row, index) in this.data"
            :key="index">
            <td v-for="(cell, index) in Object.keys(row)"
                :key="index">{{row[cell]}}</td>
        </tr>
    </table>
    <div v-else>Таблица пуста</div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss">
table {
    border-collapse: collapse;
    font-size: 12px;

    th {
        padding: 20px 20px;
        text-align: left;
    }
    td {
        padding: 10px 20px;
    }

    tr:not(:last-child){
        border-bottom: 1px solid #dcdce8;
    }

    tr:first-child {
        user-select: none;
    }

    tr:not(:first-child) {
        cursor: pointer;

        &:hover {
            box-shadow: 0px 3px 5px #0000001a;
        }
    }
}
</style>