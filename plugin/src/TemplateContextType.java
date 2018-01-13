import com.intellij.codeInsight.template.TemplateContextType;
import com.intellij.psi.PsiFile;
import org.jetbrains.annotations.NotNull;

class TemplateContext extends TemplateContextType {
    protected TemplateContext() {
        super("NG-ZORRO", "ng-zorro");
    }

    @Override
    public boolean isInContext(@NotNull PsiFile file, int offset) {
        return file.getName().endsWith(".html") || file.getName().endsWith(".ts");
    }
}