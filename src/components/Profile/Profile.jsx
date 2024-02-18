import {
  Avatar,
  Description,
  ProfileContainer,
  ProfileLocation,
  ProfileName,
  ProfileStats,
  ProfileTag,
  ProfileViews,
  ProfileFollowers,
  ProfileLikes,
  ProfileLabel,
  ProfileQuantity,
} from "./Profile.styled";
import user from "./user.json"


export const Profile = () => {
    return (
      <ProfileContainer>
        <Description>
          <Avatar src={user.avatar} alt="User avatar" />
          <ProfileName>{user.username}</ProfileName>
          <ProfileTag>{user.tag}</ProfileTag>
          <ProfileLocation>{user.location}</ProfileLocation>
        </Description>

        <ProfileStats>
          <ProfileFollowers>
            <ProfileLabel>Followers</ProfileLabel>
            <ProfileQuantity>{user.stats.followers}</ProfileQuantity>
          </ProfileFollowers>

          <ProfileViews>
            <ProfileLabel>Views</ProfileLabel>
            <ProfileQuantity>{user.stats.views}</ProfileQuantity>
          </ProfileViews>

          <ProfileLikes>
            <ProfileLabel>Likes</ProfileLabel>
            <ProfileQuantity>{user.stats.likes}</ProfileQuantity>
          </ProfileLikes>
        </ProfileStats>
      </ProfileContainer>
    );
};
