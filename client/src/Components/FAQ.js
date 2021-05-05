import React, { useState, useEffect } from "react";
import useScreenSize from "./useScreenSize";
import NavBar from "./NavBar";
import openArrow from "../images/openArrow.svg";
import closeArrow from "../images/closeArrow.svg";
import "../FAQ.css";

function FAQ(props) {
  const screenSize = useScreenSize();
  const [isOpen, setOpen] = useState(false);

  const [scroll, setScroll] = useState(0);

  const [faqActive, setFaqActive] = useState(0);

  function scrollView(e) {
    let element = document.querySelector("#" + e);
    console.log("e", e);
    console.log("element", element);
    element.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
        console.log(scroll);
      }
    });
  });

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="faqHeading">
        <h1 class="heading">Frequently Asked Questions</h1>
        <p className="faqDescr">
          Learn more about ESG-NRG and the work we do everyday to improve our
          climate across the globe and enable shipping companies to compensate
          their impact on the environment in a pragmatic and efficient way -
          while promoting their own corporate identities towards their
          customers.
        </p>
      </div>

      {/* FAQ NUMBER 1 */}
      <section id="faq1">
        <div>
          {faqActive === 1 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">What is carbon offsetting?</p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                A carbon offset is a reduction or aversion of emissions of
                carbon dioxide or other greenhouse gases (GHG) made in order to
                compensate for emissions made elsewhere. A single carbon offset
                credit is equal to one tonne of carbon dioxide equivalent gases
                (CO2e). Carbon credits go towards financing certain types of
                ‘green’ projects, such as:{" "}
              </p>
              <ul>
                <li>
                  Agriculture - activities associated with agriculture and
                  on-farm management, includes also livestock activity.
                </li>
                <li>
                  Carbon Capture and Storage/Carbon Capture or Use (CCS/CCU) -
                  any activities associated with carbon capture and storage/use.
                </li>
                <li>
                  Energy Efficiency - domestic or industrial activities that
                  reduces emissions through reduced energy consumption. Includes
                  waste heat/gas recovery and fossil fuel electricity generation
                  through more efficient processes.
                </li>
                <li>
                  Forestry - includes all forestry related activities such as
                  afforestation, reforestation, improved forestry management and
                  reduced emissions from deforestation and degradation.
                </li>
                <li>
                  Fuel switch - activities whose baseline is fossil fuel use for
                  power or heat, includes switching to less carbon intensive
                  fuels (e.g. Coal to gas but excludes renewables)
                </li>
                <li>
                  Fugitive emissions - activities addressing industrial methane
                  emissions such as avoided methane leaks/vents from oilfields
                  and mining, excludes livestock and agricultural practices
                  (e.g. rice paddies)
                </li>
                <li>
                  Industrial gases - all flourinated gases: hydroflourocarbon
                  (HFCs), perflourocarbons (PFCs) and ozone depleting
                  substances.
                </li>
                <li>
                  Manufacturing - all activities associated with the less
                  emission intensive creation of materials (cement, retail,
                  construction, metal)
                </li>
                <li>
                  Other land use - all land use management activities except
                  forestry and agriculture, e.g. wetlands.
                </li>
                <li>
                  Renewable-energy - all renewable energy activities including
                  sustainable biomass. Transport - activities reducing emissions
                  from activities associated with transport and mobility.
                </li>
                <li>
                  Waste - landfill gas and wastewater treatment mitigation
                  activities; includes waste management and waste handling.
                </li>
              </ul>
              <p className="answer">
                Read more about the different carbon offset projects available
                here.
              </p>
              {scrollView("faq1")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">What is carbon offsetting?</p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(1)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ NUMBER 2 */}
      <section id="faq2">
        <div>
          {faqActive === 2 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  Why should I offset my ship emissions?
                </p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                Maritime shipping accounts for between 2-3% of the world’s CO2
                emissions. While there is greater focus than ever on finding
                sustainable alternatives to fueling the most environmentally
                friendly mode of transport - we are still years away from
                finding the ideal solution.
              </p>
              <p className="answer">
                We need to utilize every tool at our disposal to avert avoidable
                emissions and pull CO2 from the atmosphere to meet the targets
                set out by the Paris Climate Agreement - to limit global
                temperature rise to well-below 2°C above pre-industrial levels
                and pursuing efforts to limit warming to 1.5°C.
              </p>

              <p className="answer">
                To achieve this, GHG emissions must halve by 2030 – and drop to
                net-zero by 2050.{" "}
              </p>

              <p className="answer">
                Putting a price on CO2/GHG emissions with carbon offset projects
                not only benefits the local environments and our (global)
                atmosphere, but also makes clean-energy alternatives more
                economically feasible. Hydrogen will always be more expensive
                than fuel oil unless we start pricing in the negative
                externalities from fossil fuels use. The same logic applies for
                promoting the use of bio-fuels, LNG, Methanol and Ammonia as a
                ship fuel.
              </p>

              <p className="answer">
                Carbon offsets also aid 'beyond-carbon development’. They create
                tangible benefits in the form of biodiversity conservation,
                sustained water supplies, enhanced agricultural productivity and
                livelihood opportunities for some of the communities most
                affected by dangerous climate change.
              </p>

              <p className="answer">
                As society places greater value on the ESG credentials of the
                goods and services they purchase. Mirrored by the increasing
                number of shipping companies and cargo owners pledges to become
                carbon neutral or ‘net-zero’. Shouldn’t you really be asking
                ‘how can I?’ - instead of - ‘why should I?’ - offset my ship’s
                emissions?
              </p>

              {scrollView("faq2")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  Why should I offset my ship emissions?
                </p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(2)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAC NUMBER 3 */}
      <section id="faq3">
        <div>
          {faqActive === 3 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">How exactly does it work?</p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                Select your vessel in the Marine Offset Platform (MOP) and plot
                in the details of your voyage; such as the ports your vessel
                intends to call and a rough speed estimate (in knots).
              </p>

              <p className="answer">
                The Marine Offset Platform (MOP) can differentiate whether the
                vessel is sailing in a SECA/non-SECA zone, and will
                automatically switch the emissions factor from VLSFO to LSMGO.
                The Marine Offset Platform can estimate your fuel consumption
                rate, however we expect your ship operators to have better data
                on actual consumption, and they can override the estimate to add
                their own fuel burn rate.
              </p>

              <p className="answer">
                When making a freight offer to your client, include in your
                bunker cost calculation the dollar value, mts amount and project
                details of the carbon credits you intend to offset over the
                course of the voyage. You have all that information easily
                extractable from the MOP platform or you can send your client a
                unique link to that voyage, where you have all the information
                effortly accessible and clearly presented.
              </p>

              <p className="answer">
                Once your client fixes their freight, fix your bunkers the way
                you normally would, and then go-ahead and fix your carbon
                offsets via the Marine Offset Platform (MOP). We add a 3% error
                margin to the amount of carbon offsets, in case ‘all didn’t go
                well’ and the ‘weather wasn’t permitting’ during the voyage.
                Upon or just prior completion of the voyage, reconfirm the
                actual bunkers consumed with ESG-NRG through the Marine Offset
                Platform (MOP). Wire the funds required to offset the actual
                CO2/GHG emitted to ESG-NRG and we will transfer the credits to
                your registry account for you to retire, or we can retire them
                on your behalf. Any excess carbon credits can be held by your
                account for later voyages or sold back to ESG-NRG at purchase
                cost.{" "}
              </p>

              <p className="answer">
                The same principles apply for fuels of different carbon
                intensity (HSFO, VLSFO, LSMGO, LNG, ammonia, bio-fuels based on
                waste or otherwise), the offsetting of only a part-cargo of a
                voyage (whether bulk, container, car or person), and making a
                cargo carbon-neutral (for example adding carbon credits to
                offset the methane slip from transporting - as well as the
                extraction of - LNG).{" "}
              </p>

              {scrollView("faq3")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">How exactly does it work?</p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(3)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq4">
        <div>
          {faqActive === 4 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  How much does it cost to offset my carbon footprint?{" "}
                </p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                Carbon offset prices are initially based on a project’s cost to
                develop, but they are also swayed by the forces of free market
                supply and demand. The price of carbon credits can vary between
                $1-120/tCO2e (metric ton CO2 equivalent), with the average price
                of half the carbon offset credits priced at less than
                US$10/tCO2e, and the IMF calculates the global average carbon
                price is only US$2/tCO2e.
              </p>

              <p className="answer">
                Certain types of projects command a premium, either because they
                are technically complex, located in higher-cost or in deemed
                more ‘safe’ areas as compared to projects where the likelihood
                of deforestation is high.{" "}
              </p>

              <p className="answer">
                In many markets, “cheap” is often synonymous with “low quality”,
                However, some offset project types with high environmental
                integrity can produce GHG reductions at relatively low cost
                (e.g., industrial N2O destruction or avoidance projects). The
                inverse argument – that higher prices correlate with higher
                quality – is not reliably true either.
              </p>

              <p className="answer">
                Reach out to your ESG-NRG Advisor today to learn more about
                carbon offset project pricing!
              </p>

              {scrollView("faq4")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  How much does it cost to offset my carbon footprint?{" "}
                </p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(4)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq5">
        <div>
          {faqActive === 5 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">Where does my money go? </p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                ESG-NRG transacts using a broker/trader model. That means you
                receive fair and independent guidance from your ESG advisor.
                Free from any conflicts of interest that may stem from retailers
                holding a large inventory of carbon offset credits from a single
                project, have invested directly in a project(s) development or
                signed an Emissions Reduction Purchase Agreement (ERPA) with the
                project’s developers.
              </p>

              <p className="answer">
                Instead of taking a mark-up or a percentage of the transaction
                ESG-NRG earns a flat $1/tCO2e commission on each ton of CO2e you
                offset. This aligns with our overall aim and mission, which is
                to maximise shipping’s positive impact and putting a fair,
                impartial price on carbon emissions.
              </p>

              <p className="answer">
                $1/tCO2e is also probably some of the lowest fees in the
                industry. The commission goes towards financing the upkeep and
                improvement of the Marine Offset Platform (MOP). Transparency is
                important to us. So it’s only natural we provide you with all
                the invoice documentation upon deal finalization and guarantee
                best execution for our clients.{" "}
              </p>

              {scrollView("faq5")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">Where does my money go? </p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(5)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq6">
        <div>
          {faqActive === 6 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  Why don’t we consider ourselves “full brokers” or
                  “market-makers”?
                </p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                Instead of requiring you to transfer funds directly to different
                project developers, ESG-NRG can act as an escrow. Meaning we
                purchase the credits on your behalf and share the purchase
                invoice/documentation from the project developer upon deal
                finalization. This saves your accounting department from having
                to pay multiple invoices and register different vendors in your
                accounting system, as well as mitigates your risk of
                non-delivery of the carbon offset credits you purchased. All the
                upside and independent advice of a broker, save the paperwork.{" "}
              </p>

              <p className="answer">
                Market makers essentially act as wholesalers by buying and
                selling securities or commodities to satisfy the market—the
                prices they set reflect market supply and demand. Market Makers
                have a degree of risk. If there is a flood of sellers, because
                the Market Maker's job is to provide liquidity, he has to buy
                that stock or commodity even though the rest of the market may
                want to sell. If the price continues to fall he could be left
                with a lot of stock on his hands that he paid considerably
                higher prices for than he can sell for now. And vice versa - if
                a share is rising sharply the Market Maker has to continue
                selling the stock to the buyers - he could end up "short". In
                this situation he has sold stock he has not got, to fulfill all
                the buy requests, and he has to buy this stock in to balance his
                books, but at higher prices and makes a loss.
              </p>

              <p className="answer">
                Sometimes a market maker is also a broker, which can create an
                incentive for a broker to recommend securities for which the
                firm also makes a market. Investors should thus perform due
                diligence to make sure that there is a clear separation between
                a broker and a market maker.
              </p>

              {scrollView("faq6")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  Why don’t we consider ourselves “full brokers” or
                  “market-makers”?
                </p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(6)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq7">
        <div>
          {faqActive === 7 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">How does the carbon calculator work?</p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Venenatis, integer cras non nunc semper penatibus viverra. Nulla
                netus amet consectetur euismod ultrices quis consequat. Hac
                senectus vel adipiscing porttitor turpis et tortor sapien in.
                Quis pharetra tellus pulvinar eget auctor. Ipsum eget montes,
                pharetra sed adipiscing sed enim consequat senectus.{" "}
              </p>

              <p className="answer">
                Quis facilisis est consequat amet eget sed adipiscing nisi urna.
                Donec laoreet elementum consequat facilisis enim. Sit eget
                vulputate feugiat ipsum placerat convallis elementum.{" "}
              </p>

              {scrollView("faq7")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">How does the carbon calculator work?</p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(7)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq8">
        <div>
          {faqActive === 8 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">Can I support multiple projects?</p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                {" "}
                Us at ESG-NRG would prefer you take the opportunity to ‘share
                your impact’ across multiple projects - creating what we call a
                ‘Carbon Offset Blend’. For one thing your fuel was probably
                blended from different blendstocks and components - so why
                shouldn’t your carbon offsets be?{" "}
              </p>

              <p className="answer">
                We believe that by diversifying your carbon offset portfolio,
                you take part in promoting the growth of the carbon offset
                market.
              </p>

              <p className="answer">
                By supporting ‘better’ project developers, you increase the
                amount of ‘eyes on’ each project and the level of research and
                follow-up into each of them, and decrease the interest in actors
                who are less invested in a project's long-term viability.{" "}
              </p>

              {scrollView("faq8")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">Can I support multiple projects?</p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(8)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq9">
        <div>
          {faqActive === 9 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  How are the carbon offset projects certified and verified?
                </p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                {" "}
                All of the carbon offset projects we list follow a rigorous
                standard designed by a carbon credit registry.
              </p>

              <p className="answer">
                Each registry sets the framework and methodology for measuring
                the reduction, aversion or sequestration of GHG emissions each
                project entails. The projects are all independently verified by
                accredited third-parties.
              </p>

              <p className="answer">
                The primary 4 registries we list carbon credits from are:
              </p>

              <ul>
                <li>Verra (fka Verified Carbon Standard or VCS)</li>
                <li>Gold Standard (GS)</li>
                <li>Carbon Action Reserve (CAR)</li>
                <li>American Climate Registry (ACR)</li>
              </ul>
              <p className="answer">
                Each registry has their own way of working depending on the
                project type and subsequently, there are different positive and
                negative aspects to each registry’s approach.{" "}
              </p>

              <p className="answer">
                Whilst crediting has often previously been dominated by the
                Clean Development Mechanism (CDM). Following the crash of the
                CDM market price in 2012, CDM crediting activity stabilized.
                Credits from independent crediting mechanisms were responsible
                for almost two-thirds of all credits issued in 2019.{" "}
              </p>

              <p className="answer">
                Equally, governments are developing their own domestic crediting
                mechanisms, such as the California Compliance Offset Program,
                Australian Emissions Reduction Fund or China GHG Voluntary
                Emission Reduction Program.{" "}
              </p>

              <p className="answer">
                Reach out to ESG-NRG today for further information on how we can
                assist with voluntary and compliance emissions reductions
              </p>
              {scrollView("faq9")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  How are the carbon offset projects certified and verified?
                </p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(9)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq10">
        <div>
          {faqActive === 10 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  What’s the difference between VERs and CERs?
                </p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                VERs are Voluntary Emissions Reductions, a project that is
                independently audited (i.e., verified) against a third-party
                certification standard.
              </p>
              <p className="answer">
                CERs are Certified Emissions Reductions, also known as CER, is a
                certificate issued by the United Nations to member nations for
                preventing one tonne of carbon dioxide emissions. These are
                usually issued to member states for projects achieving
                greenhouse gas reductions through the use of Clean Development
                Mechanisms (CDM)
              </p>
              {scrollView("faq10")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  What’s the difference between VERs and CERs?
                </p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(10)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq11">
        <div>
          {faqActive === 11 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  Will you certify my company as carbon neutral?
                </p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                No, but ESG-NRG can definitely help whether you need a Life
                Cycle Assessment (LCA) for a commodity you are extracting,
                transporting or trading or a ‘2nd opinion’ on your sustainable
                business investments.
              </p>
              {scrollView("faq11")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  Will you certify my company as carbon neutral?
                </p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(11)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq12">
        <div>
          {faqActive === 12 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">Is ESG-NRG a non-profit?</p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                ESG-NRG is not a non-profit organization. We are an organization
                driven by our mission of putting a price on carbon and
                maximising shipping’s positive impact on the planet.{" "}
              </p>
              <p className="answer">
                If we are successful, it means shipping companies are
                voluntarily purchasing and retiring carbon offsets to compensate
                their emissions. (...or turned over a new leaf so to speak).{" "}
              </p>
              <p className="answer">
                On the other hand, carbon offset developers and the surrounding
                communities that benefit from the projects, will have gained a
                new market and greater oversight into the project’s actual
                performance.
              </p>
              {scrollView("faq12")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">Is ESG-NRG a non-profit?</p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(12)}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="faq13">
        <div>
          {faqActive === 13 ? (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  Does ESG-NRG only works with shipping companies / cargo
                  owners?
                </p>
                <img
                  className="openArrow"
                  style={{ cursor: "pointer" }}
                  src={closeArrow}
                  alt="open icon"
                  width="50"
                  height="50"
                  value="1"
                  onClick={() => setFaqActive(0)}
                />
              </div>
              <p className="answer">
                At this stage we are focusing our efforts on the industry we
                know best.
              </p>
              <p className="answer">
                If you have plans for expansion, feel free to contact us at
                offset@esg-nrg.com
              </p>
              {scrollView("faq13")}
            </div>
          ) : (
            <div className="outerFrame">
              <div className="questionRow">
                <p className="question">
                  Does ESG-NRG only works with shipping companies / cargo
                  owners?
                </p>
                <img
                  src={openArrow}
                  style={{ cursor: "pointer" }}
                  alt="close icon"
                  width="50"
                  height="50"
                  onClick={() => setFaqActive(13)}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default FAQ;
