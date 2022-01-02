
export const Page = (props) => {
    return (
        <>
            <h2>Selected User</h2>
            {props.userDetails && <div>
                <h2>{props.userDetails.login}</h2>
                <img alt='Avatar' src={props.userDetails.avatar_url} />

          followers: {props.userDetails.followers}
            </div>}
        </>
    )
}