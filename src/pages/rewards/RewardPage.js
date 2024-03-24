import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CompactNavbar from '../../components/navbar/CompactNavbar'
import Navbar from '../../components/navbar/Navbar'
import {
  fetchRewards,
  selectRewardInfoMemo
} from '../../features/reward/rewardSlice'
import Loader from '../../components/loader/Loader'
import StarBucksHeader from '../../components/starBucksHeader/StarBucksHeader'
import './RewardPage.css'
import ActionButton from '../../components/actionButton/ActionButton'


const RewardPage = () => {
  const dispatch = useDispatch()
  const rewardInfo = useSelector(selectRewardInfoMemo)
  const isLoading = useSelector((state) => state.isLoading.isLoading)

  useEffect(() => {
    dispatch(fetchRewards())
  }, [dispatch, rewardInfo])

  return (
    <>
      <div className='reward_page_main_wrapper'>
        <Navbar />
        <CompactNavbar />
        {isLoading
          ? (
          <Loader />
            )
          : (
          <div className='reward_page_container'>
            <div style={{ position: 'sticky', top: '0' }}>
              <StarBucksHeader />
            </div>
            <div className='starbucks_wallpaper'>
              <div className='starbucks_wallpaper_container'>
                <h2
                  style={{ margin: '0', wordSpacing: '7px', maxWidth: '200px' }}
                >
                  {rewardInfo?.title && rewardInfo.title.toUpperCase()}
                </h2>
                <div style={{ margin: '10px 0px', fontSize: '1.5rem' }}>
                  {rewardInfo?.message && rewardInfo.message.split('.')[0]}
                </div>
                <div
                  style={{ margin: '15px 0px' }}
                  className='reward_page_action_button_wrapper'
                >
                  <ActionButton buttonText='Join now' />
                </div>
                <div style={{ margin: '10px 0px', fontSize: '1.5rem' }}>
                  {rewardInfo?.message && rewardInfo.message.split('.')[1]}
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
            )}
      </div>
    </>
  )
}

export default RewardPage
