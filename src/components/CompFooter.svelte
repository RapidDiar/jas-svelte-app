<script>
import translations from "../translations";
import { dict, locale, t } from '../i18n';

  $: languages = Object.keys(translations);
  $: dict.set(translations);
</script>

<footer class="p-4" style="background-color: rgb(0,0,0,0.9);">
  <div class="container-fluid">
    <!-- START FOOTER SECTION 1 -->
    <div class="row border-bottom pb-4">
      <div class="col-2" >
        <h2 style="text-align:center; color:white; font-family: 'Open Sans'; font-size:32px; font-weight: meduim;">Art</h2>
        <h2 style="text-align:center; color:white; font-family: 'Open Sans'; font-size:28px; font-weight: meduim;">Marketplace</h2>
      </div>
      <div class="col">
        <div class="row justify-content-end">
          <div class="col-2">
            <h5 class="mb-3" style="color:white; font-family: 'Open Sans'; font-size:24px; font-weight: meduim;">{$t('footer.title.mobile_app')}</h5>
            <!-- <h5 class="mb-3">Mobile app</h5> -->
            <ul class="list-unstyled">
              <li class="mb-1">
                <a href="#" class="text" style="color:white; font-family: 'Open Sans'; font-size:18px; font-weight: meduim;">{$t('footer.text_mobile_app.features')}</a>
              </li>
              <li class="mb-1">
                <a href="#" class="text" style="color: white; font-family: 'Open Sans'; font-size:18px; font-weight: meduim;">{$t('footer.text_mobile_app.live_share')}</a>
              </li>
              <li class="mb-1">
                <a href="#" class="text" style="color: white; font-family: 'Open Sans'; font-size:18px; font-weight: meduim;">{$t('footer.text_mobile_app.video_record')}</a>
              </li>
            </ul>
          </div>

          <div class="col-2">
            <h5 class="mb-3" style="color: white; font-family: 'Open Sans'; font-size:24px; font-weight: meduim;">{$t('footer.title.community')}</h5>
            <ul class="list-unstyled">
              <li class="mb-1">
                <a href="#" class="text" style="color: white; font-family: 'Open Sans'; font-size:18px; font-weight: meduim;">{$t('footer.text_community.artists')}</a>
              </li>
              <li class="mb-1">
                <a href="#" class="text" style="color: white; font-family: 'Open Sans'; font-size:18px; font-weight: meduim;">{$t('footer.text_community.portal')}</a>
              </li>
              <li class="mb-1">
                <a href="#" class="text" style="color: white; font-family: 'Open Sans'; font-size:18px; font-weight: meduim;">{$t('footer.text_community.events')}</a>
              </li>
            </ul>
          </div>

          <div class="col-2">
            <h5 class="mb-3" style="color: white; font-family: 'Open Sans'; font-size:24px; font-weight: meduim;">{$t('footer.title.company')}</h5>
            <ul class="list-unstyled">
              <li class="mb-1">
                <a href="#" class="text" style="color: white; font-family: 'Open Sans'; font-size:18px; font-weight: meduim;">{$t('footer.text_company.about_us')}</a>
              </li>
              <li class="mb-1">
                <a href="#" class="text" style="color: white; font-family: 'Open Sans'; font-size:18px; font-weight: meduim;">{$t('footer.text_company.contact_us')}</a>
              </li>
              <li class="mb-1">
                <a href="#" class="text" style="color: white; font-family: 'Open Sans'; font-size:18px; font-weight: meduim;">{$t('footer.text_company.history')}</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    <!-- END FOOTER SECTION 1 -->
    
    <!-- START FOOTER SECTION 2 -->
    <div class="row mt-3">
      <div class="col">
        <p style="color: white; font-family: 'Open Sans'; font-size:16px; font-weight: meduim;" >© ArtMarketplace, Inc. 2019.</p>
      </div>
      <div class="col d-flex justify-content-end me-4">
        <p class="mb-0 me-2 align-self-center " style="color: white; font-family: 'Open Sans'; font-size:16px; font-weight: meduim;">{$t('footer.follow_us')} </p>
        <!-- Youtube -->
        <a class="btn btn-primary btn-floating m-1" style="background-color: #ed302f;" href="#!" role="button">
          <i class="fab fa-youtube"></i>
        </a>
        <!-- Facebook -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #3b5998;"
          href="#!"
          role="button"
          ><i class="fab fa-facebook-f"></i
        ></a>

        <!-- Twitter -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #55acee;"
          href="#!"
          role="button"
          ><i class="fab fa-twitter"></i
        ></a>

        <!-- Google -->
        <a
          class="btn btn-primary btn-floating m-1"
          style="background-color: #dd4b39;"
          href="#!"
          role="button"
          ><i class="fab fa-google"></i
        ></a>
      </div>
    </div>
    <!-- END FOOTER SECTION 2 -->
  </div>
</footer>