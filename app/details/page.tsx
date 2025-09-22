import ContactUs from '@/components/userComponents/ContactUs'
import FaqItem from '@/components/userComponents/FAQItem'
import { instrumentSerif } from '@/lib/fonts/font'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaExchangeAlt,FaFileSignature,FaInfoCircle, FaPhone, FaQuestion, FaShippingFast } from 'react-icons/fa'

const page = () => {
  return (
    <main className='text-sm md:text-base px-9 md:px-25 pt-26'>
      <h1 className={`${instrumentSerif.className} text-center text-3xl font-bold`}>Details About Zayphire</h1>
        <section className='grid border-b border-dashed border-black pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 md:gap-15 mt-10 mb-10'>
            <Link href={"#about"} className='border border-black p-10 px-5 sm:px-9 lg:px-6   flex items-center justify-center flex-col gap-3'>
                <h2>About us</h2>
                <FaInfoCircle className="text-4xl" />
            </Link>
            <Link href={"#exchangeAndReturns"} className='border border-black p-10 px-5 sm:px-9 lg:px-6  flex items-center justify-center flex-col gap-3'>
                <h2>Exchange & Returns</h2>
                <FaExchangeAlt className="text-4xl" />
            </Link>
            <Link href={"#terms"} className='border border-black p-10 px-5 sm:px-9 lg:px-6  flex items-center justify-center flex-col gap-3'>
                <h2>Terms & Conditions</h2>
                <FaFileSignature className="text-4xl" />
            </Link>
            <Link href={"#FAQ"} className='border border-black p-10 px-5 sm:px-9 lg:px-6  flex items-center justify-center flex-col gap-3'>
                <h2>FAQ</h2>
                <FaQuestion className="text-4xl" />
            </Link>
            <Link href={"#shippingAndDeliveries"} className='border border-black p-10 px-5 sm:px-9 lg:px-6  flex items-center justify-center flex-col gap-3'>
                <h2>Shipping & Deliveries</h2>
                <FaShippingFast className="text-4xl" />
            </Link>
            <Link href={"#contact"} className='border border-black p-10 px-5 sm:px-9 lg:px-6  flex items-center justify-center flex-col gap-3'>
                <h2 className='text-lg '>Contact us</h2>
                <FaPhone className="text-4xl" />
            </Link>
        </section>
      <section className="my-5" id="about">
        <h2 className="detailsHeading">About Us</h2>
        <p className='leading-9'> Zayphire is more than just a fabric store — it&apos;s a celebration of timeless elegance, refined craftsmanship, and modern Pakistani fashion. Born with a passion for unstitched fabrics and style that speaks, Zayphire is your new go-to destination for luxurious textures, statement-worthy colors, and premium-quality materials.

            At Zayphire, we believe that fabric is the first step in a story — your story. Whether you&apos;re dressing for tradition, making a statement, or simply looking for that perfect daily wear, we offer curated collections that blend sophistication with comfort. Every piece in our store is handpicked for its quality, design, and ability to elevate your wardrobe.

            What sets us apart? It’s our dedication to making fashion accessible. We don&apos;t just sell fabric — we bring you affordable luxury, seasonal inspiration, and trend-forward styles. Our goal is to empower you with choices that match your individuality and celebrate your culture — with a modern twist.

            Every thread you touch at Zayphire comes with a promise:

            Remarkable quality

            Customer-first experience

            Modern yet timeless aesthetics

            From classic lawn to rich cottons, festive formals to everyday wear — Zayphire is on a mission to redefine how unstitched fabric shopping feels, online and beyond. With new arrivals dropping regularly and a team obsessed with perfection, we invite you to explore a collection that’s as diverse and beautiful as the people who wear it.

            Zayphire – Fabric that speaks for you.</p>
      </section>
      <hr />
      <section className="my-5" id="exchangeAndReturns">
        <h2 className="detailsHeading">Exchange And Returns</h2>
        <article>
            <div className='leading-9'>
                At Zayphire, we prioritize your satisfaction by offering a hassle-free return and exchange policy tailored for your convenience. If you&apos;re not fully satisfied with your purchase, or if the size isn&apos;t the right fit, you may request an exchange or return under the conditions below.

                <br /><br />
                <b>Eligibility Criteria:</b><br />
                You may request a return or exchange within:
                <ul className="list-disc ml-6 my-2 text-left">
                <li><b>03 days</b> of delivery for issues like receiving a wrong, defective, damaged, stained, incomplete, or tampered product.</li>
                <li><b>07 days</b> of delivery for size-related exchanges (if the item is unused, undamaged, and has tags attached).</li>
                </ul>

                <br />
                <b>Conditions to Qualify:</b><br />
                The product must be:
                <ul className="list-disc ml-6 my-2 text-left">
                <li>Unused and in original condition with packaging, tags, and labels attached.</li>
                <li>Returned with all necessary details: order number, name, contact, and requested size (if applicable).</li>
                </ul>

                <br />
                <b>Process:</b><br />
                To initiate the exchange or return:
                <ul className="list-disc ml-6 my-2 text-left">
                <li>Contact us at <a href="mailto:zayphire@gmail.com">zayphire@gmail.com</a></li>
                <li>Use any courier service of your choice to send the item to our return address:<br />
                📦 <i>City Filling Station Shamsi Road Mardan.</i></li>
                <li>Include a handwritten note inside the parcel with order details and exchange request (if applicable).</li>
                </ul>

                Once we receive and verify your parcel, we’ll process the exchange (if the requested size is in stock) within 4 to 5 working days. We do not charge any fee for exchanges; however, you are responsible for return shipping.

                <br /><br />
                <b>Important Notes:</b><br />
                <ul className="list-disc ml-6 my-2 text-left">
                <li>Size exchanges on sale or discounted items are subject to stock availability and not guaranteed.</li>
                <li>Orders delivered outside Pakistan are not eligible under this policy.</li>
                <li>Due to screen brightness or lighting, minor color/texture differences may occur and are not valid grounds for exchange or return.</li>
                </ul>

                <br />
                <b>Non-Returnable / Non-Exchangeable Items:</b><br />
                <ul className="list-disc ml-6 my-2 text-left">
                <li>Innerwear and undergarments</li>
                <li>Fragrances and perfumes</li>
                <li>Jewelry or accessories</li>
                </ul>

                <br />
                <b>Damaged/Defective Product?</b><br />
                Please send clear images or videos of the issue within 03 days of delivery for review. This helps our team investigate and respond with a suitable resolution quickly.

                <br /><br />
                Your trust means everything to us — thank you for shopping with Zayphire.
                </div>
        </article>
      </section>
      <hr />
      <section className="my-5"  id='terms'>
        <h2 className="detailsHeading">Terms and Conditions</h2>
        <article className='leading-9'>
            By placing an order with us or accessing our website, you agree to comply with and be bound by the following terms and conditions. These terms apply to all visitors, users, and customers of Zayphire. We recommend reading them carefully before making any purchase.
            <ol className="list-decimal space-y-4 ml-6 text-left">
                <li>
                  <strong>General</strong><br />
                  Zayphire reserves the right to modify, update, or remove any part of these terms and conditions at any time without prior notice. Your continued use of our website following any changes constitutes your acceptance of those changes. It is your responsibility to check this page periodically for updates.
                </li>
            
                <li>
                  <strong>Order Acceptance</strong><br />
                  All orders placed on the Zayphire website are subject to order confirmation and product availability. We reserve the right to refuse or cancel an order for any reason, including but not limited to limitations on quantities available for purchase, inaccuracies in product or pricing information, or issues identified by our payment or delivery team. Once your order is placed, you will receive a confirmation via SMS or email. This confirmation does not signify our acceptance of your order, only that we have received it.
                </li>
            
                <li>
                  <strong>Product Availability</strong><br />
                  While we aim to keep our inventory updated, certain products may become unavailable due to high demand. In such cases, if you’ve placed an order for an item that becomes unavailable, our team will inform you and offer an exchange, store credit, or cancellation if preferred.
                </li>
            
                <li>
                  <strong>Pricing & Payment</strong><br />
                  All prices listed on our website are in Pakistani Rupees (PKR) and are inclusive of applicable taxes unless stated otherwise. Zayphire reserves the right to change prices at any time without prior notice. We currently accept Cash on Delivery (COD) as the only payment method.
                </li>
            
                <li>
                  <strong>Delivery</strong><br />
                  Zayphire delivers all orders via Fastex Courier Service, typically within 2–3 working days after dispatch. While we make every effort to ensure timely delivery, delays may occur due to unforeseen circumstances like weather disruptions, public holidays, or issues in remote regions. Delivery across Pakistan is free of charge, and there are no extra fees during sales or promotions.
                </li>
            
                <li>
                  <strong>Returns & Exchanges</strong><br />
                  Zayphire offers a 7-day exchange policy. Refunds or cancellations are available. To be eligible for an exchange, the product must be returned in its original condition with tags attached. You may return the parcel using any courier service. More details are provided in our <Link  className="underline text-blue-500" href={"#exchangeAndReturns"}>Exchange Policy</Link> section.
                </li>
            
                <li>
                  <strong>Use of Content</strong><br />
                  All content on the Zayphire website — including images, product descriptions, graphics, logos, and designs — is the property of Zayphire and may not be copied, reproduced, or used without express written permission. Any unauthorized use of our content may lead to legal action.
                </li>
            
                <li>
                  <strong>Color Accuracy</strong><br />
                  We strive to display product colors as accurately as possible. However, due to variations in screens, lighting, and photography, slight color differences may occur. We do not guarantee that your device will display colors exactly as they appear in real life.
                </li>
            
                <li>
                  <strong>Limitation of Liability</strong><br />
                  Zayphire will not be held responsible for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or products. By using our platform, you agree that Zayphire’s liability is limited to the purchase amount paid by you.
                </li>
            
                <li>
                  <strong>Contact Information</strong><br />
                  For any questions regarding your order, product details, delivery, or policies, you can contact our <Link href="#contact" className="underline text-blue-500" >customer support</Link> team via the contact page or by reaching out on WhatsApp or email. We&apos;re here to assist you with anything you need.
                </li>
              </ol>
        </article>
      </section>
      <hr />
       <section className="my-10" id="FAQ">
        <h2 className="detailsHeading mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FaqItem
            question="How long does delivery take?"
            answer="Our standard delivery time is 2-3 working days across Pakistan. Remote areas may take slightly longer."
          />
          <FaqItem
            question="What is your return policy?"
            answer="We accept exchanges within 7 days of purchase if the product is unused, undamaged, and has tags attached."
          />
          <FaqItem
            question="Do you ship internationally?"
            answer="Currently, we only deliver within Pakistan. International shipping will be introduced soon."
          />
          <FaqItem
            question="Are your product colors accurate?"
            answer="We try our best to display colors accurately, but slight variations may occur due to screen brightness and lighting."
          />
        </div>
      </section>
      <hr />
      <section className="my-5"  id="shippingAndDeliveries">
        <h2 className="detailsHeading">Shipping & Deliveries</h2>
        <article className='leading-9'>
            <p className='mb-6'>At Zayphire, we believe in providing our customers with a smooth and reliable shopping experience from start to finish. Once an order is confirmed, we make it our priority to dispatch it within 24 hours. Our logistics partner, Fastex Courier Service, ensures that your parcel reaches you in a timely manner — typically within 2 to 3 working days. However, in rare cases, such as bad weather conditions, unforeseen law and order situations, or deliveries to interior and remote areas, there might be a slight delay. We continuously monitor all orders and strive to keep our customers updated in case of any disruption.
            One of the core values at Zayphire is transparency — and we proudly offer free delivery across Pakistan, with no additional charges or hidden fees at checkout. Whether you&apos;re shopping from a major city or a small town, we ensure fair and equal access to our products. Even during sales and promotions, no extra delivery charges are applied — your satisfaction remains our top priority. <br /> In case your order has not arrived within 7 working days, we encourage you to contact our support team promptly so we can resolve the issue and get your order to you as soon as possible.</p>
            <div>
                <h3 className='text-xl mb-3'>Need Help?</h3>
                <p className='text-[14px] md:text-[16px] mb-3'><FaPhone className='inline' /> +923265753305</p>
                <p className='text-[14px] md:text-[16px] whitespace-nowrap'><FaEnvelope className='inline' /> zayphire@gmail.com</p>
            </div>
        </article>
      </section>
      <hr />
      <section id="contact">
        <ContactUs />
      </section>
      
    </main>
  )
}

export default page
