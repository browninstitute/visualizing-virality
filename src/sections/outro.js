export function OUTRO({UserSelection}){
    let demotionval, username;
    if (UserSelection) {
        demotionval = UserSelection.demotion;
        username = UserSelection.username;
    }
    return (
        <div className="outro_section">
              {/* demoted by: {demotionval}, for username: {username} */}
        </div>
    );
}