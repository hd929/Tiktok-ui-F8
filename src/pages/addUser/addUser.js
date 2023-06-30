import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './addUser.module.scss';
import Button from '~/components/Button/Button';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function AddUser() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickname, setNickname] = useState('');
  const [bio, setBio] = useState('');
  const [tick, setTick] = useState(false);
  const [followings, setFollowings] = useState(0);
  const [avatar, setAvatar] = useState(null);
  const [avatarURL, setAvatarURL] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('nickname', nickname);
    formData.append('avatar', avatar);
    formData.append('bio', bio);
    formData.append('followings_count', followings);
    formData.append('tick', tick ? 1 : 0);

    const postUser = async () => {
      const result = await userService.add(formData);

      setResult(result);
    };

    postUser();
  };

  return (
    <div className={cx('wrapper')}>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <label className={cx('form-group')}>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <label className={cx('form-group')}>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </label>
        <label className={cx('form-group')}>
          nickname
          <input
            type="text"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </label>
        <label className={cx('form-group')}>
          avatar
          <input
            type="file"
            onChange={(e) => {
              setAvatar(e.target.files[0]);
              setAvatarURL(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <img className={cx('preview-image')} src={avatarURL} alt="" />
        </label>
        <label className={cx('form-group')}>
          bio
          <input
            type="text"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </label>
        <label className={cx('form-group')}>
          followings
          <input
            type="number"
            value={followings}
            onChange={(e) => {
              setFollowings(e.target.value);
            }}
          />
        </label>
        <label className={cx('form-group')}>
          tick
          <input type="checkbox" name="tick" checked={tick} onChange={(e) => setTick(e.target.checked)} />
        </label>
        <Button primary type="submit">
          Submit
        </Button>
        <br />
        <div>{result}</div>
      </form>
    </div>
  );
}

export default AddUser;
