// 引入Quasar CSS
import 'quasar/dist/quasar.css'

// 引入Quasar Icon庫（可選）
import '@quasar/extras/material-icons/material-icons.css'

// 引入您需要的組件
import {
  QBtn,
  QCard,
  QCardSection,
  QCardActions,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QIcon,
  QInput,
  QTable,
  QTh,
  QTr,
  QTd,
  QDialog,
  ClosePopup,
  QSeparator
} from 'quasar'

const quasarConfig = {
  plugins: {},
  components: {
    QBtn,
    QCard,
    QCardSection,
    QCardActions,
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QIcon,
    QInput,
    QTable,
    QTh,
    QTr,
    QTd,
    QDialog,
    QSeparator
  },
  directives: {
    ClosePopup
  },
  config: {
    // 可根據需要添加全域配置
    brand: {
      primary: '#1976D2',
      secondary: '#26A69A',
      accent: '#9C27B0',
      dark: '#1D1D1D',
      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    }
  }
}

export default quasarConfig 