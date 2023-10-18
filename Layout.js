// Layout.js
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Loading from 'components/Loading'
import Error from 'components/Error'

const Layout = ({ isLoading, isFetching, isError, children }) => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        {isLoading || isFetching || isError ? <Loading /> : children}
      </div>
    </>
  )
}

export default Layout
