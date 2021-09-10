<template>
  <BaseTemplate>
  <div class="container-center-horizontal">
    <div class="desktop-dashboard screen">
      <div class="flex-col">
        <div class="flex-row">
          <div class="flex-col-1">
            <div class="targets">
              <div class="daily-target-tab">
                <div class="overlap-group">
                  <div class="title lato-normal-black-16px">{{ title }}</div>
                  <div class="flex-row-1">
                    <div class="steps">
                      <h1 class="number mulish-normal-black-26px">{{ number }}</h1>
                      <div class="steps-copy lato-normal-black-14px">{{ stepsCopy }}</div>
                    </div>
                    <img class="man-1" :src="man1" />
                  </div>
                  <div class="group-17 animate-enter2">
                    <div class="overlap-group-1">
                      <div class="progress-bar-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="x-tab">
                <div class="overlap-group2">
                  <div class="title lato-normal-black-16px">{{ title2 }}</div>
                  <div class="flex-row-2">
                    <div class="km">
                      <div class="text-8 mulish-normal-black-26px">{{ text8 }}</div>
                      <div class="km-1 lato-normal-black-14px">{{ km }}</div>
                    </div>
                    <img class="man-2" :src="man2" />
                  </div>
                  <div class="group-18 animate-enter1">
                    <div class="overlap-group-1">
                      <div class="progress-bar-full-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="x-tab">
                <div class="overlap-group">
                  <div class="title lato-normal-black-16px">{{ title3 }}</div>
                  <div class="flex-row-3">
                    <div class="classes">
                      <div class="text-7 mulish-normal-black-26px">{{ text7 }}</div>
                      <div class="classes-1 lato-normal-black-14px">{{ classes }}</div>
                    </div>
                    <img class="man-3" :src="man3" />
                  </div>
                  <div class="group-19 animate-enter">
                    <div class="overlap-group-1">
                      <div class="progress-bar-full-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-row-4">
              <div class="weekly-activity-tab-desktop">
                <div class="frame-1">
                  <div class="overlap-group9">
                    <div class="overlap-group11">
                      <div class="overlap-group10">
                        <div class="graph-parameters-1">
                          <div class="flex-row-5">
                            <div class="graph-km mulish-normal-black-8px">
                              <div class="x20km">{{ x20Km }}</div>
                              <div class="graph-km-item">{{ x15Km }}</div>
                              <div class="graph-km-item">{{ x10Km }}</div>
                              <div class="graph-km-item">{{ x5Km }}</div>
                              <div class="graph-km-item">{{ x0Km }}</div>
                            </div>
                            <div class="overlap-group-3" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
                              <img class="graph-gradient" :src="graphGradient" /><img
                                class="graph-line-2"
                                :src="graphLine2"
                              /><img class="graph-line-1" :src="graphLine1" />
                              <div class="graph-point-2"></div>
                              <div class="graph-point-1"></div>
                            </div>
                          </div>
                          <div class="graph-days mulish-normal-black-12px">
                            <div class="place">{{ place }}</div>
                            <div class="graph-days-item">{{ mon }}</div>
                            <div class="graph-days-item">{{ tue }}</div>
                            <div class="graph-days-item">{{ wed }}</div>
                            <div class="graph-days-item">{{ thu }}</div>
                            <div class="graph-days-item">{{ fri }}</div>
                            <div class="graph-days-item">{{ sat }}</div>
                          </div>
                        </div>
                        <bubble1 :bubble12Props="bubble1Props.bubble12Props" />
                        <bubble2 :bubble22Props="bubble2Props.bubble22Props" />
                        <bubble3 :bubble12Props="bubble3Props.bubble12Props" />
                        <bubble4 :bubble12Props="bubble4Props.bubble12Props" />
                        <bubble5 :bubble12Props="bubble5Props.bubble12Props" />
                        <group6 :bubble22Props="group6Props.bubble22Props" />
                        <div class="overlap-group8">
                          <feature-dot />
                          <div class="text-5 smart-layers-pointers feature-caveat hidden">{{ text5 }}</div>
                        </div>
                      </div>
                      <div class="title-1 lato-normal-black-16px">{{ title4 }}</div>
                    </div>
                    <div class="graph-parameters-2">
                      <div class="rectangle-1"></div>
                      <div class="this-week mulish-normal-black-8px">{{ thisWeek }}</div>
                      <div class="rectangle-2"></div>
                      <div class="last-week mulish-normal-black-8px">{{ lastWeek }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="overlap-group22">
                <div class="overlap-group15">
                  <div class="title-2 lato-normal-black-16px">{{ title5 }}</div>
                  <div class="gif">
                    <img
                      width="100%"
                      height="100%"
                      src="https://anima-uploads.s3.amazonaws.com/projects/5f0b18c5dc4101cb9591e974/files/weight-update-gif.gif"
                    />
                  </div>
                </div>
                <div class="overlap-group16">
                  <feature-dot />
                  <div class="text-6 smart-layers-pointers feature-caveat hidden">{{ text6 }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="my-profile-tab-desktop">
            <div class="my-profile-card-desktop">
              <div class="overlap-group5">
                <div class="title-3 castoro-normal-black-16px">{{ title6 }}</div>
                <div class="my-profile">
                  <img class="profile-picture" :src="profilePicture" />
                  <div class="title-4">{{ title7 }}</div>
                  <hight-weight />
                </div>
                <div class="recommended-trainers">
                  <div class="flex-row-6">
                    <div class="text-4 castoro-normal-black-16px">{{ text4 }}</div>
                    <div class="overlap-group4">
                      <div class="oval border-1px-te-papa-green"></div>
                      <img
                        class="path"
                        src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/path-22@2x.png"
                      />
                    </div>
                  </div>
                  <trainer1-desktop
                    :avatar1="trainer1DesktopProps.avatar1"
                    :name="trainer1DesktopProps.name"
                    :kickboxing="trainer1DesktopProps.kickboxing"
                  />
                  <trainer1-desktop
                    :avatar1="trainer1Desktop2Props.avatar1"
                    :name="trainer1Desktop2Props.name"
                    :kickboxing="trainer1Desktop2Props.kickboxing"
                    :className="trainer1Desktop2Props.className"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col-2">
          <div class="overlap-group10-1">
            <div class="overlap-group13">
              <div class="overlap-group12">
                <div class="overlap-group2-1">
                  <div class="class-card-1">
                    <div class="overlap-group-4">
                      <div class="class-picture-2" :style="{ 'background-image': 'url(' + classPicture2 + ')' }"></div>
                      <div class="flex-row-7">
                        <div class="flex-col-3">
                          <div class="title-5 lato-normal-black-16px">{{ title8 }}</div>
                          <p class="subtitle-1 lato-normal-black-12px">{{ subtitle }}</p>
                        </div>
                        <div class="overlap-group1" :style="{ 'background-image': 'url(' + overlapGroup1 + ')' }">
                          <img class="full-heart-icon smart-layers-pointers" :src="fullHeartIcon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="select-class-hover-1 smart-layers-pointers"
                    :style="{ 'background-image': 'url(' + selectClassHover + ')' }"
                  >
                    <div class="select-class lato-normal-white-16px">{{ selectClass }}</div>
                    <menu2 />
                  </div>
                </div>
                <div class="overlap-group3">
                  <div class="class-card">
                    <div class="overlap-group-2">
                      <div class="class-picture" :style="{ 'background-image': 'url(' + classPicture + ')' }"></div>
                      <div class="flex-row-8">
                        <div class="flex-col-4">
                          <div class="title-6 lato-normal-black-16px">{{ title9 }}</div>
                          <p class="subtitle lato-normal-black-12px">{{ subtitle2 }}</p>
                        </div>
                        <div class="overlap-group1" :style="{ 'background-image': 'url(' + overlapGroup12 + ')' }">
                          <img class="full-heart-icon smart-layers-pointers" :src="fullHeartIcon2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="select-class-hover smart-layers-pointers"
                    :style="{ 'background-image': 'url(' + selectClassHover2 + ')' }"
                  >
                    <div class="select-class lato-normal-white-16px">{{ selectClass2 }}</div>
                    <menu2 />
                  </div>
                </div>
                <div class="more-classes castoro-normal-black-16px">{{ moreClasses }}</div>
                <div class="overlap-group9-1">
                  <feature-dot />
                  <div class="text-2 smart-layers-pointers feature-caveat hidden">{{ text2 }}</div>
                </div>
              </div>
              <div class="overlap-group11-1">
                <div class="overlap-group5-1">
                  <div class="class-card">
                    <div class="overlap-group-5">
                      <div class="class-picture-4" :style="{ 'background-image': 'url(' + classPicture4 + ')' }"></div>
                      <div class="title-7 lato-normal-black-16px">{{ title10 }}</div>
                      <div class="flex-row-9">
                        <p class="subtitle-2 lato-normal-black-12px">{{ subtitle3 }}</p>
                        <div class="overlap-group1-1" :style="{ 'background-image': 'url(' + overlapGroup13 + ')' }">
                          <img class="full-heart-icon smart-layers-pointers" :src="fullHeartIcon3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="select-class-hover smart-layers-pointers"
                    :style="{ 'background-image': 'url(' + selectClassHover3 + ')' }"
                  >
                    <div class="select-class lato-normal-white-16px">{{ selectClass3 }}</div>
                    <menu2 />
                  </div>
                </div>
                <div class="video-card-desktop">
                  <div class="overlap-group6">
                    <img class="bg" :src="bg" /><empty-heart-iconvideo-card :src="emptyHeartIconvideoCardProps.src" />
                    <p class="subtitle-3 lato-normal-black-14px">{{ subtitle4 }}</p>
                    <div class="title-8 lato-normal-black-16px">{{ title11 }}</div>
                    <full-heart-icon />
                    <div class="video">
                      <video
                        src="https://anima-uploads.s3.amazonaws.com/projects/602bd72d5ab477d8e2c77aae/files/trainez-video-3-1-mb.mp4"
                        loop
                        controls
                        autoplay="autoplay"
                        playsinline
                      ></video>
                    </div>
                  </div>
                </div>
                <div class="overlap-group7">
                  <feature-dot />
                  <div class="text-1 smart-layers-pointers feature-caveat hidden">{{ text1 }}</div>
                </div>
                <div class="recent-classes castoro-normal-black-16px">{{ recentClasses }}</div>
                <div class="overlap-group8-1">
                  <feature-dot />
                  <div class="autoplaying-videos smart-layers-pointers feature-caveat hidden">
                    {{ autoplayingVideos }}
                  </div>
                </div>
              </div>
            </div>
            <div class="overlap-group4-1">
              <div class="class-card">
                <div class="overlap-group-2">
                  <div class="class-picture" :style="{ 'background-image': 'url(' + classPicture6 + ')' }"></div>
                  <div class="flex-row-10">
                    <div class="flex-col-5">
                      <div class="title-9 lato-normal-black-16px">{{ title12 }}</div>
                      <p class="subtitle lato-normal-black-12px">{{ subtitle5 }}</p>
                    </div>
                    <div class="overlap-group2-2" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
                      <full-heart-icon :className="fullHeartIconProps.className" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="select-class-hover smart-layers-pointers"
                :style="{ 'background-image': 'url(' + selectClassHover4 + ')' }"
              >
                <div class="select-class lato-normal-white-16px">{{ selectClass4 }}</div>
                <menu2 />
              </div>
            </div>
          </div>
          <div class="overlap-group23">
            <div class="overlap-group1-2">
              <div class="start-your-free-tria castoro-normal-black-24px">{{ startYourFreeTria }}</div>
              <div class="invite-form">
                <div class="name castoro-normal-black-16px">{{ name }}</div>
                <div class="text-form border-1px-heavy-metal">
                  <input
                    class="name-1 lato-light-black-16px"
                    name="name"
                    :placeholder="inputPlaceholder"
                    :type="inputType"
                  />
                </div>
                <div class="email-address castoro-normal-black-16px">{{ emailAddress }}</div>
                <div class="text-form border-1px-heavy-metal">
                  <input
                    class="email lato-light-black-16px"
                    name="email"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
                <cta />
              </div>
            </div>
            <div class="overlap-group14">
              <feature-dot />
              <div class="text-3 smart-layers-pointers feature-caveat hidden">{{ text3 }}</div>
            </div>
            <img class="illustration-2" :src="illustration2" />
          </div>
        </div>
      </div>
      <div class="welcome-tab-desktop">
        <div class="overlap-group17">
          <div class="flex-col-6">
            <img class="title-10" :src="title13" />
            <div class="subtitle-4">{{ subtitle6 }}</div>
          </div>
          <img class="image" :src="image" />
        </div>
      </div>
      <div class="dashboard">{{ dashboard }}</div>
      <div class="overlap-group24">
        <div class="top-bar-desktop">
          <div class="overlap-group18">
            <div class="top-bar-bg"></div>
            <div class="avatar" :style="{ 'background-image': 'url(' + avatar + ')' }">
              <div class="avatars-notifications"></div>
            </div>
            <div class="overlap-group1-3">
              <div class="search-icon">
                <div class="search-icon-1">
                  <div class="overlap-group-6">
                    <div class="oval-1"></div>
                    <img class="path-1" :src="path2" />
                  </div>
                </div>
              </div>
              <input
                class="search lato-normal-black-16px"
                name="search"
                :placeholder="inputPlaceholder3"
                :type="inputType3"
              />
            </div>
            <div class="frame-3">
              <div class="text-9 smart-layers-pointers feature-caveat hidden">{{ text9 }}</div>
            </div>
            <div class="overlap-group2-3">
              <feature-dot :className="featureDotProps.className" />
              <div class="menu-that-pops smart-layers-pointers feature-caveat hidden">{{ menuThatPops }}</div>
            </div>
          </div>
          <div class="overlap-group3-1">
            <feature-dot :className="featureDot2Props.className" />
            <div class="text-10 smart-layers-pointers feature-caveat hidden">{{ text10 }}</div>
          </div>
        </div>
        <div class="overlap-group19">
          <feature-dot :className="featureDot3Props.className" />
          <div class="text-11 smart-layers-pointers feature-caveat hidden">{{ text11 }}</div>
        </div>
      </div>
      <div class="side-bar-desktop">
        <div class="overlap-group20">
          <div class="overlap-group-7">
            <div class="dashboard-icon">
              <div class="dashboard-icon-1">
                <img
                  class="icon"
                  src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/icon-2@2x.svg"
                />
              </div>
            </div>
          </div>
          <div class="overlap-group1-4">
            <img class="classes-icon" :src="classesIcon" />
            <div class="classes-icon-hover smart-layers-pointers"></div>
          </div>
          <div class="calendar-icon">
            <div class="calendar-icon-1">
              <img
                class="icon-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/icon@2x.svg"
              />
            </div>
          </div>
          <div class="setting-icons" :style="{ 'background-image': 'url(' + settingIcons + ')' }"></div>
        </div>
      </div>
      <div class="frame-2">
        <div class="overlap-group21">
          <feature-dot :className="featureDot4Props.className" />
          <div class="hovering-state smart-layers-pointers feature-caveat hidden">{{ hoveringState }}</div>
        </div>
      </div>
    </div>
  </div>
 </BaseTemplate>
</template>

<script lang="ts">
export default defineComponent({
name: "DesktopDashboard",
});
</script>

<script lang="ts" setup>
import BaseTemplate from '@/pages/BaseTemplate.vue';
import Bubble1 from "@/components/Bubble1.vue";
import Bubble2 from "@/components/Bubble2.vue";
import Bubble3 from "@/components/Bubble3.vue";
import Bubble4 from "@/components/Bubble4.vue";
import Bubble5 from "@/components/Bubble5.vue";
import Group6 from "@/components/Group6.vue";
import FeatureDot from "@/components/FeatureDot.vue";
import HightWeight from "@/components/HightWeight.vue";
import Trainer1Desktop from "@/components/Trainer1Desktop.vue";
import Menu2 from "@/components/Menu2.vue";
import EmptyHeartIconvideoCard from "@/components/EmptyHeartIconvideoCard.vue";
import FullHeartIcon from "@/components/FullHeartIcon.vue";
import CTA from "@/components/CTA.vue";
import { defineComponent } from 'vue';

defineProps([
    "title",
    "number",
    "stepsCopy",
    "man1",
    "title2",
    "text8",
    "km",
    "man2",
    "title3",
    "text7",
    "classes",
    "man3",
    "x20Km",
    "x15Km",
    "x10Km",
    "x5Km",
    "x0Km",
    "overlapGroup",
    "graphGradient",
    "graphLine2",
    "graphLine1",
    "place",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "text5",
    "title4",
    "thisWeek",
    "lastWeek",
    "title5",
    "text6",
    "title6",
    "profilePicture",
    "title7",
    "text4",
    "classPicture2",
    "title8",
    "subtitle",
    "overlapGroup1",
    "fullHeartIcon",
    "selectClassHover",
    "selectClass",
    "classPicture",
    "title9",
    "subtitle2",
    "overlapGroup12",
    "fullHeartIcon2",
    "selectClassHover2",
    "selectClass2",
    "moreClasses",
    "text2",
    "classPicture4",
    "title10",
    "subtitle3",
    "overlapGroup13",
    "fullHeartIcon3",
    "selectClassHover3",
    "selectClass3",
    "bg",
    "subtitle4",
    "title11",
    "text1",
    "recentClasses",
    "autoplayingVideos",
    "classPicture6",
    "title12",
    "subtitle5",
    "overlapGroup2",
    "selectClassHover4",
    "selectClass4",
    "startYourFreeTria",
    "name",
    "inputType",
    "inputPlaceholder",
    "emailAddress",
    "inputType2",
    "inputPlaceholder2",
    "text3",
    "illustration2",
    "title13",
    "subtitle6",
    "image",
    "dashboard",
    "avatar",
    "path2",
    "inputType3",
    "inputPlaceholder3",
    "text9",
    "menuThatPops",
    "text10",
    "text11",
    "classesIcon",
    "settingIcons",
    "hoveringState",
    "bubble1Props",
    "bubble2Props",
    "bubble3Props",
    "bubble4Props",
    "bubble5Props",
    "group6Props",
    "trainer1DesktopProps",
    "trainer1Desktop2Props",
    "emptyHeartIconvideoCardProps",
    "fullHeartIconProps",
    "featureDotProps",
    "featureDot2Props",
    "featureDot3Props",
    "featureDot4Props",
  ]);
</script>

<style scoped>
.desktop-dashboard {
  background-color: var(--hint-of-red);
  height: 2005px;
  overflow: hidden;
  position: relative;
  width: 1280px;
}

.flex-col {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 120px;
  min-height: 1497px;
  position: absolute;
  top: 455px;
  width: 1122px;
}

.flex-row {
  align-items: flex-start;
  display: flex;
  min-width: 1120px;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 475px;
  width: 807px;
}

.targets {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 4px 10px #0000000d;
  display: flex;
  min-width: 804px;
}

.daily-target-tab {
  align-items: flex-start;
  display: flex;
  height: 190px;
  justify-content: center;
  min-width: 248px;
}

.overlap-group {
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: -1px;
  min-height: 192px;
  padding: 21px 0;
  width: 250px;
}

.title {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 21px;
  min-height: 24px;
  white-space: nowrap;
}

.flex-row-1 {
  align-items: flex-start;
  display: flex;
  height: 45px;
  margin-right: 23.08px;
  margin-top: 10px;
  min-width: 185px;
}

.steps {
  align-items: flex-end;
  display: flex;
  height: 24px;
  overflow: hidden;
  width: 105px;
}

.number {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  min-width: 65px;
  white-space: nowrap;
}

.steps-copy {
  letter-spacing: 0;
  line-height: 14px;
  margin-left: 6px;
  min-height: 14px;
  min-width: 36px;
  opacity: 0.5;
  white-space: nowrap;
}

.man-1 {
  align-self: flex-end;
  height: 41px;
  margin-left: 54px;
  width: 26px;
}

.group-17 {
  height: 10px;
  margin-top: 31px;
  width: 208px;
  opacity: 0;
  transform: translate(-25px, 0);
}

.group-17.animate-enter2 {
  animation: animate-enter2-frames 0.4s ease-in-out 0.3s 1 normal forwards;
  opacity: 0;
  transform: translate(-25px, 0);
}

.overlap-group-1 {
  align-items: flex-start;
  background-color: var(--aqua-deep-22);
  border-radius: 7px;
  display: flex;
  left: -1px;
  min-width: 210px;
  position: relative;
  top: -1px;
}

.progress-bar-full {
  background-color: var(--te-papa-green);
  border-radius: 7px;
  height: 12px;
  width: 164px;
}

.x-tab {
  align-items: flex-start;
  display: flex;
  height: 190px;
  justify-content: center;
  margin-left: 30px;
  min-width: 248px;
}

.overlap-group2 {
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: -1px;
  min-height: 192px;
  padding: 20px 0;
  width: 250px;
}

.flex-row-2 {
  align-items: flex-start;
  display: flex;
  height: 46px;
  margin-right: 23.19px;
  margin-top: 11px;
  min-width: 185px;
}

.km {
  align-items: flex-end;
  display: flex;
  height: 24px;
  overflow: hidden;
  width: 65px;
}

.text-8 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: -0.13px;
  min-height: 24px;
  min-width: 40px;
  white-space: nowrap;
}

.km-1 {
  letter-spacing: 0;
  line-height: 14px;
  margin-bottom: -0.13px;
  margin-left: 6px;
  min-height: 14px;
  min-width: 21px;
  opacity: 0.5;
  white-space: nowrap;
}

.man-2 {
  align-self: flex-end;
  height: 43px;
  margin-left: 91px;
  width: 29px;
}

.group-18 {
  height: 10px;
  margin-top: 29px;
  width: 208px;
  opacity: 0;
  transform: translate(-25px, 0);
}

.group-18.animate-enter1 {
  animation: animate-enter1-frames 0.4s ease-in-out 0.6s 1 normal forwards;
  opacity: 0;
  transform: translate(-25px, 0);
}

.progress-bar-full-1 {
  background-color: var(--aqua-deep2);
  border-radius: 7px;
  height: 12px;
  width: 95px;
}

.flex-row-3 {
  align-items: flex-start;
  display: flex;
  height: 44px;
  margin-right: 22.19px;
  margin-top: 10px;
  min-width: 186px;
}

.classes {
  align-items: flex-end;
  display: flex;
  height: 24px;
  overflow: hidden;
  width: 93px;
}

.text-7 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  min-width: 41px;
  white-space: nowrap;
}

.classes-1 {
  letter-spacing: 0;
  line-height: 14px;
  margin-left: 6px;
  min-height: 14px;
  min-width: 48px;
  opacity: 0.5;
  white-space: nowrap;
}

.man-3 {
  align-self: flex-end;
  height: 41px;
  margin-left: 64px;
  width: 29px;
}

.group-19 {
  height: 10px;
  margin-top: 32px;
  width: 208px;
  opacity: 0;
  transform: translate(-25px, 0);
}

.group-19.animate-enter {
  animation: animate-enter-frames 0.4s ease-in-out 0.9s 1 normal forwards;
  opacity: 0;
  transform: translate(-25px, 0);
}

.progress-bar-full-2 {
  background-color: var(--aqua-deep2);
  border-radius: 7px;
  height: 12px;
  width: 110px;
}

.flex-row-4 {
  align-items: flex-end;
  display: flex;
  margin-left: 3px;
  min-width: 804px;
}

.weekly-activity-tab-desktop {
  display: flex;
  width: 529px;
}

.frame-1 {
  align-items: flex-start;
  display: flex;
  height: 255px;
  overflow: hidden;
  width: 529px;
}

.overlap-group9 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 5px 10px #1e1e1e0a;
  display: flex;
  flex-direction: column;
  margin-left: -4px;
  margin-top: -1px;
  min-height: 257px;
  padding: 11.5px 19px;
  width: 534px;
}

.overlap-group11 {
  align-self: flex-end;
  height: 194px;
  position: relative;
  width: 490px;
}

.overlap-group10 {
  height: 194px;
  left: 0;
  position: absolute;
  top: 0;
  width: 490px;
}

.graph-parameters-1 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 149px;
  position: absolute;
  top: 44px;
  width: 487px;
}

.flex-row-5 {
  align-items: flex-start;
  display: flex;
  height: 118px;
  margin-top: -1px;
  min-width: 487px;
}

.graph-km {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 112px;
  width: 31px;
}

.x20km {
  letter-spacing: 0;
  line-height: 16px;
  min-height: 16px;
  opacity: 0.5;
  white-space: nowrap;
}

.graph-km-item {
  letter-spacing: 0;
  line-height: 16px;
  margin-top: 8px;
  min-height: 16px;
  opacity: 0.5;
  white-space: nowrap;
}

.overlap-group-3 {
  background-size: 100% 100%;
  height: 112px;
  margin-left: 10px;
  position: relative;
  width: 446px;
}

.graph-gradient {
  height: 100px;
  left: 1px;
  position: absolute;
  top: 12px;
  width: 445px;
}

.graph-line-2 {
  height: 72px;
  left: 1px;
  position: absolute;
  top: 40px;
  width: 445px;
}

.graph-line-1 {
  height: 78px;
  left: 1px;
  position: absolute;
  top: 11px;
  width: 445px;
}

.graph-point-2 {
  background-color: var(--denim);
  border-radius: 4px;
  height: 8px;
  left: 287px;
  opacity: 0.4;
  position: absolute;
  top: 83px;
  width: 8px;
}

.graph-point-1 {
  background-color: var(--denim);
  border-radius: 4px;
  height: 8px;
  left: 355px;
  position: absolute;
  top: 33px;
  width: 8px;
}

.graph-days {
  align-items: flex-start;
  display: flex;
  height: 24px;
  margin-right: -13px;
  margin-top: 8px;
  min-width: 459px;
}

.place {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  opacity: 0.5;
  text-align: center;
  white-space: nowrap;
  width: 39px;
}

.graph-days-item {
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 29px;
  min-height: 24px;
  opacity: 0.5;
  text-align: center;
  white-space: nowrap;
  width: 39px;
}

.overlap-group8 {
  height: 43px;
  left: 117px;
  position: absolute;
  top: 0;
  width: 233px;
}

.text-5 {
  color: var(--rose);
  font-weight: 700;
  left: 0;
  line-height: 21px;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  text-align: right;
  top: 8px;
  transform: rotate(-0.57deg);
  transition: all 0.3s linear;
  white-space: nowrap;
  width: 233px;
}

.text-5:hover {
  opacity: 1;
}

.title-1 {
  left: 0;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 10px;
  white-space: nowrap;
}

.graph-parameters-2 {
  align-items: center;
  display: flex;
  height: 16px;
  margin-left: 6px;
  margin-top: 15px;
  overflow: hidden;
  width: 136px;
}

.rectangle-1 {
  background-color: var(--denim);
  border-radius: 1px;
  height: 11px;
  margin-left: -1px;
  margin-top: 1px;
  width: 11px;
}

.this-week {
  letter-spacing: 0;
  line-height: 16px;
  margin-left: 4px;
  min-height: 16px;
  min-width: 40px;
  opacity: 0.5;
  white-space: nowrap;
}

.rectangle-2 {
  background-color: var(--denim);
  border-radius: 1px;
  height: 11px;
  margin-left: 14px;
  margin-top: 1px;
  opacity: 0.4;
  width: 11px;
}

.last-week {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 16px;
  margin-left: 4px;
  min-height: 15px;
  opacity: 0.5;
  white-space: nowrap;
  width: 55px;
}

.overlap-group22 {
  height: 285px;
  margin-left: 30px;
  position: relative;
  width: 245px;
}

.overlap-group15 {
  align-items: flex-start;
  background-color: var(--blossom);
  border-radius: 5px;
  box-shadow: 0px 5px 10px #1e1e1e0a;
  display: flex;
  flex-direction: column;
  left: -1px;
  min-height: 257px;
  padding: 16px 21px;
  position: absolute;
  top: 29px;
  width: 247px;
}

.title-2 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 5px;
  min-height: 24px;
  white-space: nowrap;
}

.gif {
  align-self: center;
  height: 182px;
  margin-left: 1px;
  margin-top: 14px;
  width: 182px;
}

.overlap-group16 {
  height: 43px;
  left: 20px;
  position: absolute;
  top: 0;
  width: 204px;
}

.text-6 {
  color: var(--rose);
  font-weight: 700;
  left: 0;
  line-height: 21px;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  text-align: right;
  top: 12px;
  transform: rotate(-0.57deg);
  transition: all 0.3s linear;
  white-space: nowrap;
  width: 204px;
}

.text-6:hover {
  opacity: 1;
}

.my-profile-tab-desktop {
  display: flex;
  height: 475px;
  margin-left: 37px;
  width: 276px;
}

.my-profile-card-desktop {
  align-items: flex-start;
  display: flex;
  flex: 1;
  min-width: 278px;
}

.overlap-group5 {
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 5px 10px #1e1e1e0a;
  display: flex;
  flex-direction: column;
  margin-left: -1px;
  margin-top: -1px;
  min-height: 477px;
  padding: 21px 18.5px;
  width: 278px;
}

.title-3 {
  letter-spacing: 0;
  line-height: 24px;
  margin-right: 28px;
  min-height: 24px;
  white-space: nowrap;
  width: 208px;
}

.my-profile {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 1px;
  min-height: 225px;
  position: relative;
  width: 165px;
}

.profile-picture {
  height: 123px;
  margin-right: 1px;
  margin-top: -2px;
  width: 123px;
}

.title-4 {
  color: var(--black);
  font-family: var(--font-family-castoro);
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 1px;
  margin-top: 18px;
  min-height: 24px;
  text-align: center;
  white-space: nowrap;
  width: 162px;
}

.recommended-trainers {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  min-height: 143px;
  position: relative;
  width: 238px;
}

.flex-row-6 {
  align-items: center;
  display: flex;
  height: 24px;
  min-width: 236px;
}

.text-4 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  white-space: nowrap;
  width: 183px;
}

.overlap-group4 {
  height: 15px;
  margin-left: 39px;
  margin-top: 0.5px;
  position: relative;
  width: 15px;
}

.oval {
  border-radius: 5.18px;
  height: 10px;
  left: 2px;
  position: absolute;
  top: 2px;
  transform: rotate(-43deg);
  width: 10px;
}

.path {
  height: 4px;
  left: 10px;
  position: absolute;
  top: 10px;
  width: 4px;
}

.flex-col-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  min-height: 972px;
  width: 1122px;
}

.overlap-group10-1 {
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 5px 10px #1e1e1e0a;
  height: 540px;
  margin-left: -1px;
  margin-top: -1px;
  position: relative;
  width: 1122px;
}

.overlap-group13 {
  height: 515px;
  left: 6px;
  position: absolute;
  top: 10px;
  width: 1105px;
}

.overlap-group12 {
  height: 276px;
  left: 544px;
  position: absolute;
  top: 0;
  width: 561px;
}

.overlap-group2-1 {
  height: 237px;
  left: 288px;
  position: absolute;
  top: 39px;
  width: 273px;
}

.class-card-1 {
  align-items: flex-start;
  display: flex;
  height: 237px;
  left: 0;
  padding: 5px 9px;
  position: absolute;
  top: 0;
  width: 273px;
}

.overlap-group-4 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 10px #0000000d;
  display: flex;
  flex-direction: column;
  min-height: 219px;
  padding: 1px 0;
  width: 255px;
}

.class-picture-2 {
  background-size: 100% 100%;
  height: 144px;
  width: 253px;
}

.flex-row-7 {
  align-items: flex-end;
  display: flex;
  height: 53px;
  margin-left: 0.61px;
  margin-top: 10px;
  min-width: 214px;
}

.flex-col-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 53px;
  width: 144px;
}

.title-5 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  white-space: nowrap;
}

.subtitle-1 {
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 0.39px;
  margin-top: 5px;
  min-height: 24px;
  opacity: 0.5;
  white-space: nowrap;
}

.overlap-group1 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: 39px;
  min-width: 31px;
}

.full-heart-icon {
  height: 31px;
  pointer-events: auto;
  transition: all 0.2s ease;
  width: 31px;
}

.full-heart-icon:hover {
  opacity: 1;
}

.select-class-hover-1 {
  background-size: 100% 100%;
  cursor: pointer;
  height: 144px;
  left: 10px;
  opacity: 0.01;
  pointer-events: auto;
  position: absolute;
  top: 6px;
  transition: all 0.2s ease;
  width: 258px;
}

.select-class-hover-1:hover {
  opacity: 1;
}

.select-class {
  left: 50px;
  letter-spacing: 0;
  line-height: 20px;
  position: absolute;
  text-align: center;
  top: 62px;
  white-space: nowrap;
  width: 160px;
}

.overlap-group3 {
  height: 237px;
  left: 0;
  position: absolute;
  top: 39px;
  width: 268px;
}

.class-card {
  align-items: flex-start;
  display: flex;
  height: 237px;
  left: 0;
  padding: 5px 9px;
  position: absolute;
  top: 0;
  width: 268px;
}

.overlap-group-2 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 10px #0000000d;
  display: flex;
  flex-direction: column;
  min-height: 219px;
  padding: 1px 0;
  width: 250px;
}

.class-picture {
  background-size: 100% 100%;
  height: 144px;
  width: 248px;
}

.flex-row-8 {
  align-items: flex-end;
  display: flex;
  height: 53px;
  margin-left: 1.22px;
  margin-top: 10px;
  min-width: 211px;
}

.flex-col-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 53px;
  width: 141px;
}

.title-6 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  white-space: nowrap;
}

.subtitle {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 5px;
  min-height: 24px;
  opacity: 0.5;
  white-space: nowrap;
}

.select-class-hover {
  background-size: 100% 100%;
  cursor: pointer;
  height: 144px;
  left: 10px;
  opacity: 0.01;
  pointer-events: auto;
  position: absolute;
  top: 6px;
  transition: all 0.2s ease;
  width: 248px;
}

.select-class-hover:hover {
  opacity: 1;
}

.more-classes {
  cursor: pointer;
  left: 10px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  text-align: right;
  top: 11px;
  white-space: nowrap;
}

.overlap-group9-1 {
  height: 43px;
  left: 115px;
  position: absolute;
  top: 0;
  width: 235px;
}

.text-2 {
  color: var(--rose);
  font-weight: 700;
  left: 0;
  line-height: 21px;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  text-align: right;
  top: 8px;
  transform: rotate(-0.57deg);
  transition: all 0.3s linear;
  white-space: nowrap;
  width: 235px;
}

.text-2:hover {
  opacity: 1;
}

.overlap-group11-1 {
  height: 514px;
  left: 0;
  position: absolute;
  top: 1px;
  width: 812px;
}

.overlap-group5-1 {
  height: 237px;
  left: 544px;
  position: absolute;
  top: 276px;
  width: 268px;
}

.overlap-group-5 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 10px #0000000d;
  display: flex;
  flex-direction: column;
  min-height: 219px;
  padding: 1px 0;
  width: 250px;
}

.class-picture-4 {
  background-size: 100% 100%;
  height: 144px;
  margin-left: 1px;
  width: 248px;
}

.title-7 {
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 20px;
  margin-top: 10px;
  min-height: 24px;
  white-space: nowrap;
}

.flex-row-9 {
  align-items: center;
  align-self: center;
  display: flex;
  margin-left: 1.14px;
  min-width: 211px;
}

.subtitle-2 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 3px;
  min-height: 24px;
  opacity: 0.5;
  white-space: nowrap;
  width: 165px;
}

.overlap-group1-1 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: 15px;
  min-width: 31px;
  padding: 0 0.1px;
}

.video-card-desktop {
  align-items: flex-start;
  border-radius: 10px;
  display: flex;
  height: 475px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 39px;
  width: 534px;
}

.overlap-group6 {
  height: 475px;
  position: relative;
  width: 534px;
}

.bg {
  cursor: pointer;
  height: 475px;
  left: 0;
  position: absolute;
  top: 0;
  width: 534px;
}

.subtitle-3 {
  left: 29px;
  letter-spacing: 0;
  line-height: 24px;
  opacity: 0.5;
  position: absolute;
  top: 423px;
  white-space: nowrap;
  width: 172px;
}

.title-8 {
  cursor: pointer;
  left: 29px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 396px;
  white-space: nowrap;
}

.video {
  height: 381px;
  left: 15px;
  position: absolute;
  top: 5px;
  width: 504px;
}

.video video {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.video img {
  object-fit: cover;
}

.overlap-group7 {
  height: 43px;
  left: 495px;
  position: absolute;
  top: 459px;
  width: 62px;
}

.text-1 {
  color: var(--rose);
  font-weight: 700;
  left: 0;
  line-height: 21px;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  text-align: right;
  top: 9px;
  transform: rotate(-0.57deg);
  transition: all 0.3s linear;
  white-space: nowrap;
  width: 62px;
}

.text-1:hover {
  opacity: 1;
}

.recent-classes {
  left: 15px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 10px;
  white-space: nowrap;
  width: 203px;
}

.overlap-group8-1 {
  height: 43px;
  left: 109px;
  position: absolute;
  top: 0;
  width: 174px;
}

.autoplaying-videos {
  color: var(--rose);
  font-weight: 700;
  left: 0;
  line-height: 21px;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  text-align: right;
  top: 11px;
  transform: rotate(-0.57deg);
  transition: all 0.3s linear;
  white-space: nowrap;
  width: 174px;
}

.autoplaying-videos:hover {
  opacity: 1;
}

.overlap-group4-1 {
  height: 237px;
  left: 837px;
  position: absolute;
  top: 287px;
  width: 268px;
}

.flex-row-10 {
  align-items: flex-end;
  display: flex;
  height: 53px;
  margin-left: 1px;
  margin-top: 10px;
  min-width: 211px;
}

.flex-col-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 53px;
  width: 168px;
}

.title-9 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  white-space: nowrap;
}

.overlap-group2-2 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 31px;
  justify-content: flex-end;
  margin-left: 12px;
  min-width: 31px;
  position: relative;
}

.overlap-group23 {
  height: 384px;
  margin-top: 49px;
  position: relative;
  width: 1122px;
}

.overlap-group1-2 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 5px 10px #0000000d;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 384px;
  padding: 23px 20px;
  position: absolute;
  top: 0;
  width: 1120px;
}

.start-your-free-tria {
  letter-spacing: 0;
  line-height: 34px;
  min-height: 34px;
  white-space: nowrap;
}

.invite-form {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 253px;
  margin-top: 22px;
  position: relative;
  width: 447px;
}

.name {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  white-space: nowrap;
}

.text-form {
  align-items: center;
  border-radius: 5px;
  display: flex;
  height: 44px;
  margin-top: 8px;
  width: 447px;
}

.name-1 {
  background-color: transparent;
  border: 0;
  flex: 1;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 4.98%;
  margin-right: 4.53%;
  margin-top: -12px;
  padding: 0;
  white-space: nowrap;
  width: 404.52239990234375px;
}

.name-1::placeholder {
  color: #00000099;
}

.email-address {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 24px;
  min-height: 24px;
  white-space: nowrap;
}

.email {
  background-color: transparent;
  border: 0;
  flex: 1;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 4.98%;
  margin-right: 5.03%;
  margin-top: -12px;
  padding: 0;
  white-space: nowrap;
  width: 402.29852294921875px;
}

.email::placeholder {
  color: #00000099;
}

.overlap-group14 {
  height: 43px;
  left: 116px;
  position: absolute;
  top: 71px;
  width: 172px;
}

.text-3 {
  color: var(--rose);
  font-weight: 700;
  left: 0;
  line-height: 21px;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  text-align: right;
  top: 6px;
  transform: rotate(-0.57deg);
  transition: all 0.3s linear;
  white-space: nowrap;
  width: 172px;
}

.text-3:hover {
  opacity: 1;
}

.illustration-2 {
  height: 217px;
  left: 604px;
  object-fit: cover;
  position: absolute;
  top: 118px;
  width: 438px;
}

.welcome-tab-desktop {
  align-items: flex-start;
  display: flex;
  height: 247px;
  justify-content: center;
  left: 119px;
  min-width: 1120px;
  position: absolute;
  top: 158px;
}

.overlap-group17 {
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 5px 10px #1e1e1e0a;
  display: flex;
  height: 249px;
  margin-top: -1px;
  min-width: 1122px;
  padding: 23px 65px;
}

.flex-col-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 7.75px;
  min-height: 131px;
  width: 452px;
}

.title-10 {
  height: 38px;
  margin-left: 0.75px;
  width: 196px;
}

.subtitle-4 {
  color: var(--black);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xxl2);
  font-weight: 300;
  letter-spacing: 0;
  line-height: 35px;
  margin-top: 23px;
  min-height: 70px;
  width: 452px;
}

.image {
  align-self: flex-end;
  height: 176px;
  margin-left: 76px;
  width: 450px;
}

.dashboard {
  color: var(--black);
  font-family: var(--font-family-castoro);
  font-size: var(--font-size-xxl2);
  left: 120px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  top: 104px;
  white-space: nowrap;
  width: 203px;
}

.overlap-group24 {
  height: 86px;
  left: 80px;
  position: absolute;
  top: 0;
  width: 1200px;
}

.top-bar-desktop {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 64px;
  position: absolute;
  top: 0;
  width: 1200px;
}

.overlap-group18 {
  height: 85px;
  margin-left: -1px;
  margin-top: -1px;
  position: relative;
  width: 1202px;
}

.top-bar-bg {
  background-color: var(--white);
  height: 66px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1202px;
}

.avatar {
  background-size: 100% 100%;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: flex-end;
  left: 1131px;
  position: absolute;
  top: 18px;
  width: 30px;
}

.avatars-notifications {
  background-color: var(--sunset-orange);
  border-radius: 4px;
  height: 8px;
  margin-right: 1px;
  width: 8px;
}

.overlap-group1-3 {
  align-items: center;
  background-color: var(--hint-of-red);
  border-radius: 5px;
  display: flex;
  height: 42px;
  justify-content: flex-end;
  left: 40px;
  min-width: 806px;
  padding: 0 15px;
  position: absolute;
  top: 12px;
}

.search-icon {
  display: flex;
  height: 18px;
  margin-top: 0.94px;
  width: 17px;
}

.search-icon-1 {
  align-items: flex-end;
  display: flex;
  height: 14.305163383483887px;
  justify-content: flex-end;
  margin-left: 3.5px;
  margin-top: 1.6px;
  min-width: 10.345312118530273px;
  opacity: 0.5;
  transform: rotate(-43deg);
}

.overlap-group-6 {
  height: 15px;
  margin-bottom: -1.03px;
  position: relative;
  width: 10px;
}

.oval-1 {
  border: 1px solid #969696;
  border-radius: 5.17px;
  height: 10px;
  left: 0;
  position: absolute;
  top: 0;
  width: 10px;
}

.path-1 {
  height: 4px;
  left: 3px;
  position: absolute;
  top: 10px;
  transform: rotate(43deg);
  width: 4px;
}

.search {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 6px;
  opacity: 0.5;
  padding: 0;
  white-space: nowrap;
  width: 746px;
}

.search::placeholder {
  color: #00000099;
}

.frame-3 {
  display: flex;
  height: 34px;
  left: 73px;
  position: absolute;
  top: 51px;
  width: 180px;
}

.text-9 {
  color: var(--rose);
  font-weight: 700;
  height: 34px;
  line-height: 21px;
  opacity: 0;
  pointer-events: auto;
  text-align: right;
  transition: all 0.3s linear;
  width: 182px;
}

.text-9:hover {
  opacity: 1;
}

.overlap-group2-3 {
  height: 43px;
  left: 974px;
  position: absolute;
  top: 12px;
  width: 155px;
}

.menu-that-pops {
  color: var(--rose);
  font-weight: 700;
  left: 0;
  line-height: 21px;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  top: 10px;
  transform: rotate(-0.17deg);
  transition: all 0.3s linear;
  white-space: nowrap;
  width: 154px;
}

.menu-that-pops:hover {
  opacity: 1;
}

.overlap-group3-1 {
  height: 43px;
  margin-left: 41.28px;
  margin-top: 510px;
  position: relative;
  width: 254px;
}

.text-10 {
  color: var(--rose);
  font-weight: 700;
  left: 0;
  line-height: 21px;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  text-align: right;
  top: 11px;
  transform: rotate(-0.57deg);
  transition: all 0.3s linear;
  white-space: nowrap;
  width: 254px;
}

.text-10:hover {
  opacity: 1;
}

.overlap-group19 {
  height: 43px;
  left: 42px;
  position: absolute;
  top: 43px;
  width: 180px;
}

.text-11 {
  color: var(--emerald);
  font-weight: 700;
  left: 0;
  line-height: 21px;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  text-align: right;
  top: 6px;
  transform: rotate(-1.38deg);
  transition: all 0.3s linear;
  white-space: nowrap;
  width: 179px;
}

.text-11:hover {
  opacity: 1;
}

.side-bar-desktop {
  align-items: flex-start;
  display: flex;
  height: 2119px;
  justify-content: center;
  left: -1px;
  min-width: 80px;
  position: fixed;
  top: 0;
}

.overlap-group20 {
  align-items: center;
  background-color: #63736e;
  display: flex;
  flex-direction: column;
  margin-top: -1px;
  min-height: 2007px;
  padding: 40px 20px;
  width: 82px;
}

.overlap-group-7 {
  align-items: center;
  align-self: flex-start;
  background-color: #ffffff26;
  border-radius: 5px;
  display: flex;
  height: 41px;
  min-width: 41px;
  padding: 0 1px;
}

.dashboard-icon {
  display: flex;
  height: 39px;
  width: 39px;
}

.dashboard-icon-1 {
  align-items: flex-end;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  min-width: 39px;
  padding: 7px 6.3px;
}

.icon {
  height: 25px;
  width: 26px;
}

.overlap-group1-4 {
  height: 39px;
  margin-right: 1px;
  margin-top: 39px;
  position: relative;
  width: 39px;
}

.classes-icon {
  height: 24px;
  left: 7px;
  position: absolute;
  top: 8px;
  width: 26px;
}

.classes-icon-hover {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/613b274763ace1f43889828e/releases/613b27922bd67c89520ed42f/img/icon-1@2x.svg);
  background-size: 100% 100%;
  height: 39px;
  left: 0;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  top: 0;
  transition: all 0.4s ease;
  width: 39px;
}

.classes-icon-hover:hover {
  opacity: 1;
}

.calendar-icon {
  display: flex;
  height: 39px;
  margin-right: 1px;
  margin-top: 40px;
  width: 39px;
}

.calendar-icon-1 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  min-width: 39px;
  padding: 7.1px 6.8px;
}

.icon-1 {
  height: 24px;
  width: 25px;
}

.setting-icons {
  background-position: 50% 50%;
  background-size: cover;
  height: 39px;
  margin-right: 1px;
  margin-top: 40px;
  width: 39px;
}

.frame-2 {
  align-items: flex-start;
  display: flex;
  height: 43px;
  justify-content: flex-end;
  left: 51px;
  min-width: 147px;
  position: fixed;
  top: 119px;
}

.overlap-group21 {
  height: 43px;
  position: relative;
  width: 149px;
}

.hovering-state {
  color: var(--rose);
  font-weight: 700;
  left: 0;
  line-height: 21px;
  opacity: 0;
  pointer-events: auto;
  position: absolute;
  text-align: right;
  top: 8px;
  transform: rotate(-3.02deg);
  transition: all 0.3s linear;
  white-space: nowrap;
  width: 148px;
}

.hovering-state:hover {
  opacity: 1;
}

@keyframes animate-enter-frames {
  from {
    opacity: 0;
    transform: translate(-25px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter1-frames {
  from {
    opacity: 0;
    transform: translate(-25px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter2-frames {
  from {
    opacity: 0;
    transform: translate(-25px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
