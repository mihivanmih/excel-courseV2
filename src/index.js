import './scss/style.scss'
import {Exel} from '@/components/exel/Exel'
import {Header} from '@/components/header/Header'
import {Toolbar} from '@/components/toolbar/Toolbar'
import {Formula} from '@/components/formula/Formula'
import {Table} from '@/components/table/Table'

const excel = new Exel('#app', {
    components: [Header, Toolbar, Formula, Table],
})

excel.render()
