import ContentLoader, { } from 'react-content-loader'

const AutherProfileLoading = ({
}) => {
    return (
        <ContentLoader viewBox="0 0 380 64">
            <circle cx="24" cy="24" r="24" />
            <rect x="64" y="4" rx="4" ry="4" width="120" height="12" />
            <rect x="64" y="28" rx="4" ry="4" width="320" height="8" />
            <rect x="64" y="44" rx="4" ry="4" width="160" height="8" />
        </ContentLoader>
    )
}

export default AutherProfileLoading;