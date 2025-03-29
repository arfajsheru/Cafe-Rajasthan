import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const faqCategories = [
  {
    title: "General Inquiry",
    questions: [
      { question: "Tell me a little about Cafe Rajasthan", answer: "Cafe Rajasthan is a famous cafe known for its authentic Rajasthani flavors and cozy ambiance. We bring the traditional taste of Rajasthan to your plate with a modern twist." },
      { question: "Do you deliver all beverages cold?", answer: "No, we serve both hot and cold beverages as per the customer’s preference. You can select your preference while placing an order." },
      { question: "What are your working hours?", answer: "We are open from 8 AM to 11 PM, seven days a week. However, during festivals, our timings may vary, so do check our social media for updates." },
      { question: "Do you have vegan options?", answer: "Yes, we offer a range of vegan-friendly dishes. You can check the menu for clearly marked vegan items or ask our staff for recommendations." },
      { question: "Can I book a table in advance?", answer: "Absolutely! You can book a table through our website, app, or by calling our cafe directly. Reservations are recommended for weekends and special occasions." }
    ]
  },
  {
    title: "Payment Related",
    questions: [
      { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, UPI, and cash on delivery. Online payments can be made securely via our app or website." },
      { question: "Can I get a refund if my order is canceled?", answer: "Yes, refunds are processed within 5-7 business days, depending on your bank or payment method. For further details, contact our support team." },
      { question: "Do you have any cashback offers?", answer: "Yes, we frequently run cashback and discount offers. Keep an eye on our app notifications and website for the latest deals." },
      { question: "Is there a service charge?", answer: "No, we do not charge any additional service fees. However, if you’re happy with our service, you can always tip our staff voluntarily." },
      { question: "Can I use multiple discount codes?", answer: "No, only one discount code can be applied per order. Make sure to use the best available offer for maximum savings." }
    ]
  },
  {
    title: "Wallet Related",
    questions: [
      { question: "How can I add money to my wallet?", answer: "You can add money using UPI, credit/debit cards, or net banking through our app." },
      { question: "Is there a minimum balance requirement?", answer: "No, you can keep any balance in your wallet, but some offers may require a minimum amount." },
      { question: "Can I transfer wallet balance to my bank?", answer: "Yes, you can withdraw your wallet balance to your linked bank account, which may take 2-3 business days." },
      { question: "What happens if my payment fails while using the wallet?", answer: "If a wallet transaction fails, the amount will be auto-refunded within a few minutes. If not, contact our support." },
      { question: "Can I use my wallet balance along with other payment methods?", answer: "Yes, you can combine wallet balance with other payment modes like UPI or cards during checkout." }
    ]
  },
  {
    title: "Feedback & Suggestions",
    questions: [
      { question: "How can I give feedback on my experience?", answer: "You can share your feedback through our app, website, or by emailing us at support@example.com." },
      { question: "Do you offer any rewards for giving feedback?", answer: "Yes, we occasionally run reward programs for valuable feedback. Keep an eye on our announcements!" },
      { question: "Can I suggest new items for the menu?", answer: "Absolutely! We love hearing from our customers. You can suggest new dishes via our feedback form." },
      { question: "Where can I report an issue with my order?", answer: "You can report issues through the ‘Help & Support’ section in our app, or contact customer support directly." },
      { question: "How do you handle negative feedback?", answer: "We take all feedback seriously and strive to improve based on customer suggestions and concerns." }
    ]
  },
  {
    title: "Coupons & Offers",
    questions: [
      { question: "How can I apply a coupon code?", answer: "You can enter the coupon code at checkout in the ‘Apply Coupon’ section before making the payment." },
      { question: "Where can I find the latest offers?", answer: "Check our website, app notifications, and social media pages for the latest deals and discounts." },
      { question: "Can I use multiple coupons in one order?", answer: "No, only one coupon code can be applied per order. Choose the best available offer for maximum savings." },
      { question: "Do coupons have an expiry date?", answer: "Yes, each coupon has a validity period. Make sure to use it before the expiration date mentioned." },
      { question: "Are there any exclusive offers for new users?", answer: "Yes, new users get exclusive discounts on their first order. Check the ‘New User Offers’ section for details." }
    ]
  },
  {
    title: "Gift Cards",
    questions: [
      { question: "How can I purchase a gift card?", answer: "You can buy a gift card from our website or app under the ‘Gift Cards’ section. Choose the amount and proceed with the payment." },
      { question: "Where can I redeem my gift card?", answer: "Gift cards can be redeemed during checkout. Enter the unique gift card code in the ‘Apply Gift Card’ section." },
      { question: "Do gift cards have an expiration date?", answer: "Yes, each gift card has a validity period. Check the terms and conditions before purchasing." },
      { question: "Can I transfer my gift card to someone else?", answer: "Yes, gift cards are transferable. You can share the code with anyone to redeem it." },
      { question: "What happens if my gift card balance is less than my order amount?", answer: "If your order total exceeds the gift card balance, you can pay the remaining amount using other payment methods." }
    ]
  },
  {
    title: "No-Cost EMI",
    questions: [
      { question: "What is No-Cost EMI?", answer: "No-Cost EMI allows you to pay for your purchase in easy monthly installments without any extra interest or charges." },
      { question: "How can I avail No-Cost EMI?", answer: "During checkout, select the No-Cost EMI option and choose your preferred bank and tenure." },
      { question: "Which banks offer No-Cost EMI?", answer: "We have tie-ups with leading banks like HDFC, ICICI, SBI, and Axis Bank. Check the available options at checkout." },
      { question: "Is there a minimum purchase amount for No-Cost EMI?", answer: "Yes, the minimum order amount to avail No-Cost EMI varies by bank. Please check the terms at checkout." },
      { question: "Can I prepay my EMI?", answer: "Yes, you can prepay your EMI, but some banks may charge a foreclosure fee. Check with your bank for details." }
    ]
  }
];

const HelpSupport = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenQuestion(null);
  };

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>FAQs</Text>
      {faqCategories.map((category, catIndex) => (
        <View key={catIndex}>
          <TouchableOpacity style={styles.categoryContainer} onPress={() => toggleCategory(catIndex)}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <Image style={styles.icon} source={require("../assets/rightarrow.png")} />
          </TouchableOpacity>
          {openCategory === catIndex &&
            category.questions.map((faq, quesIndex) => (
              <View key={quesIndex} >
                <TouchableOpacity style={styles.questionContainer} onPress={() => toggleQuestion(quesIndex)}>
                  <Text style={styles.questionText}>{faq.question}</Text>
                  <Image style={styles.icon} source={require("../assets/rightarrow.png")} />
                </TouchableOpacity>
                {openQuestion === quesIndex && <Text style={styles.answer}>{faq.answer}</Text>}
              </View>
            ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default HelpSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
    paddingHorizontal:5,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    marginBottom: 15,
    color: 'black',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: "#ad954d",
    paddingHorizontal: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginBottom: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ad954d',
  },
  questionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ad954d',
  },
  icon: {
    width: 20,
    height: 20,
  },
  answer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'gray',
    color: '#654321',
    backgroundColor:"#d1d5db"
  },
});
