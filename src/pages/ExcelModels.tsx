import { MouseEvent } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Lock } from "lucide-react";
import thumbnailAutoloan from "@/assets/thumbnail-autoloan.jpg";
import thumbnailMultifamily from "@/assets/thumbnail-multifamily.jpg";
import thumbnailBudget from "@/assets/thumbnail-budget.jpg";

const models = [
  {
    title: "Auto Loan Underwriting Model",
    category: "Consumer Lending",
    thumbnail: thumbnailAutoloan,
    description:
      "Consumer credit risk assessment tool with borrower inputs, calculated risk metrics, approval scorecard, and full amortization schedule.",
    file: "/models/AutoLoan_Underwriting_Model.xlsx",
    filename: "AutoLoan_Underwriting_Model.xlsx",
  },
  {
    title: "Multifamily Returns Analyzer",
    category: "Real Estate",
    description:
      "14-unit multifamily investment returns tracker with NOI, cash flow, IRR, equity multiple, and annual performance summary.",
    file: "/models/Multifamily_Returns_Analyzer.xlsx",
    filename: "Multifamily_Returns_Analyzer.xlsx",
  },
  {
    title: "Personal Budget Dashboard",
    category: "Personal Finance",
    description:
      "Fiscal year budget dashboard with income/expense tracking, savings goals, and budget vs. actual variance analysis.",
    file: "/models/Personal_Budget_Dashboard.xlsx",
    filename: "Personal_Budget_Dashboard.xlsx",
  },
];

const handleModelDownload = async (
  event: MouseEvent<HTMLButtonElement>,
  filePath: string,
  fileName: string
) => {
  event.preventDefault();
  try {
    const response = await fetch(filePath, { credentials: "include" });
    if (!response.ok) throw new Error("Failed to fetch model");
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(blobUrl);
  } catch {
    window.open(filePath, "_blank", "noopener,noreferrer");
  }
};

const ExcelModels = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-[1.1]">
              Excel Models
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Downloadable financial models and dashboards. All models are
              password-protected to preserve formula integrity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {models.map((model, index) => (
              <Card
                key={model.title}
                className="bg-card/50 border-border/50 rounded-2xl overflow-hidden opacity-0 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${0.15 + index * 0.1}s` }}
              >
                {/* Styled preview header */}
                <div className="bg-secondary/60 flex items-center justify-center py-10 border-b border-border/30">
                  <FileSpreadsheet className="h-16 w-16 text-primary/70" />
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold mb-2 leading-snug">
                    {model.title}
                  </h2>
                  <Badge
                    variant="secondary"
                    className="w-fit mb-3 text-xs font-medium"
                  >
                    {model.category}
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-5 flex-1 text-pretty">
                    {model.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                    <Lock className="h-3 w-3" />
                    <span>Password-protected</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={(e) =>
                      void handleModelDownload(e, model.file, model.filename)
                    }
                  >
                    <Download className="h-4 w-4" />
                    Download Model
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExcelModels;
