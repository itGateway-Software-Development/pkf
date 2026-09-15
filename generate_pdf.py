from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("Helvetica", size=15)
pdf.cell(200, 10, txt="Doing Business in Myanmar", ln=1, align='C')
pdf.set_font("Helvetica", size=12)
pdf.ln(10)
pdf.multi_cell(0, 10, txt="""This 'Doing Business in Myanmar' guide provides a concise yet informative overview of the key considerations for conducting business in the country. It covers major areas including Myanmar's demographic and environmental profile, the domestic business environment, taxation, accounting and legal regulations, offering a general understanding of the business landscape. While comprehensive in scope, this guide is not intended to serve as an exhaustive resource for all legal or regulatory matters. Accordingly, it should not be relied upon as the sole basis for making business or legal decisions in Myanmar.

Laws and regulations in Myanmar are subject to frequent updates. We strongly encourage readers to seek professional advice from relevant authorities or qualified experts before engaging in any investment or business activities.

Despite a challenging investment climate, Myanmar remains a resource-rich nation with a strategic location and untapped opportunities in several vital sectors. With a careful, informed and socially aware approach, investors can still build resilient and impactful ventures in the country.

We hope this publication serves as a useful starting point in your exploration of Myanmar's business environment. Should you require further guidance or specialised support, PKF Myanmar is here to assist you at every stage of your journey.""")

pdf.output("public/downloads/doing-business-in-myanmar.pdf")
print("PDF generated successfully")
