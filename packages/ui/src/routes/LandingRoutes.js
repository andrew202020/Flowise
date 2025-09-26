import { lazy } from 'react'

// project imports
import MinimalLayout from 'layout/MinimalLayout'
import Loadable from 'ui-component/loading/Loadable'

// obsidian room routing
const ObsidianRoom = Loadable(lazy(() => import('views/obsidian-room')))

// ==============================|| LANDING ROUTES ||============================== //

const LandingRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/obsidian-room',
            element: <ObsidianRoom />
        }
    ]
}

export default LandingRoutes