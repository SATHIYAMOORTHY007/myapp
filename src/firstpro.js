import FontAwesome from 'react-fontawesome'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
function PriceCard() {
  let array = [
    {
      version: 'FREE',
      price: '0',
      features: [
        { type: 'Single User', isEnable: true },
        { type: '5GB Storage', isEnable: true },
        { type: 'Unlimited Public Projects', isEnable: true },
        { type: 'Community Access' },
        { type: 'Unlimited Private Projects' },
        { type: 'Dedicated Phone Support' },
        { type: 'Free Subdomain' },
        { type: 'Monthly Status Reports' },
      ],
    },
    {
      version: 'PLUS',
      price: '9',
      features: [
        { type: '5 Users', isEnable: true, isBold: true },
        { type: '50GB Storage', isEnable: true },
        { type: 'Unlimited Public Projects', isEnable: true },
        { type: 'Community Access', isEnable: true },
        { type: 'Unlimited Private Projects', isEnable: true },
        { type: 'Dedicated Phone Support', isEnable: true },
        { type: 'Free Subdomain', isEnable: true },
        { type: 'Monthly Status Reports' },
      ],
    },
    {
      version: 'PRO',
      price: '49',
      features: [
        { type: 'Unlimited Users', isEnable: true, isBold: true },
        { type: '150GB Storage', isEnable: true },
        { type: 'Unlimited Public Projects', isEnable: true },
        { type: 'Community Access', isEnable: true },
        { type: 'Unlimited Private Projects', isEnable: true },
        { type: 'Dedicated Phone Support', isEnable: true },
        { type: 'Unlimited Free Subdomains', isEnable: true },
        { type: 'Monthly Status Reports', isEnable: true },
      ],
    },
  ]
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {array.map((e) => {
            return (
              <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">
                      {e.version}
                    </h5>
                    <h6 class="  text-center">
                      ${e.price}
                      <span class="period">/month</span>
                    </h6>
                    <hr></hr>
                    <ul class="fa-ul">
                      {e.features.map((item) => {
                        return (
                          <li>
                            {item.isEnable ? (
                              <span class="text-strong">
                                <i className="bi bi-check-lg"></i>
                                {item.type}
                              </span>
                            ) : (
                              <span className="text-muted">
                                <i className="bi bi-x">{item.type}</i>
                              </span>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { PriceCard }
