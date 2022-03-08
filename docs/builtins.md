# Builtins

## Computation Modules

OneLabeler builds in the implementation of a variety of interface and algorithm modules at developers' disposal.
These modules can be composed into data labeling tools without requiring textual programming.

::: details See the full list of built-in modules
| Module                                                                                                                        | Type                              | interface/algorithm |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------- |
| bitmap image                                                                                                                  | interactive labeling - data type  | interface           |
| text                                                                                                                          | interactive labeling - data type  | interface           |
| video                                                                                                                         | interactive labeling - data type  | interface           |
| audio                                                                                                                         | interactive labeling - data type  | interface           |
| point cloud                                                                                                                   | interactive labeling - data type  | interface           |
| vector image                                                                                                                  | interactive labeling - data type  | interface           |
| pdf                                                                                                                           | interactive labeling - data type  | interface           |
| website                                                                                                                       | interactive labeling - data type  | interface           |
| classification                                                                                                                | interactive labeling - label task | interface           |
| multi-label classification                                                                                                    | interactive labeling - label task | interface           |
| freeform text annotation                                                                                                      | interactive labeling - label task | interface           |
| object detection                                                                                                              | interactive labeling - label task | interface           |
| 2D segmentation                                                                                                               | interactive labeling - label task | interface           |
| 3D segmentation                                                                                                               | interactive labeling - label task | interface           |
| span tagging                                                                                                                  | interactive labeling - label task | interface           |
| span relation                                                                                                                 | interactive labeling - label task | interface           |
| temporal segmentation                                                                                                         | interactive labeling - label task | interface           |
| single object display                                                                                                         | interactive labeling              | interface           |
| grid matrix                                                                                                                   | interactive labeling              | interface           |
| cluster centroids                                                                                                             | data object selection             | algorithm           |
| cluster index                                                                                                                 | data object selection             | algorithm           |
| dense areas                                                                                                                   | data object selection             | algorithm           |
| entropy                                                                                                                       | data object selection             | algorithm           |
| entropy diversity                                                                                                             | data object selection             | algorithm           |
| entropy diversity density                                                                                                     | data object selection             | algorithm           |
| least confident                                                                                                               | data object selection             | algorithm           |
| smallest margin                                                                                                               | data object selection             | algorithm           |
| interactive projection                                                                                                        | data object selection             | interface           |
| [COCO-SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)                                                    | default labeling                  | algorithm           |
| [DeepLab](https://github.com/tensorflow/tfjs-models/tree/master/deeplab)                                                      | default labeling                  | algorithm           |
| [MobileNet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)                                                  | default labeling                  | algorithm           |
| [POS tagging](https://www.nltk.org/api/nltk.tag.html)                                                                         | default labeling                  | algorithm           |
| general-purpose model prediction                                                                                              | default labeling                  | algorithm           |
| image bag of words                                                                                                            | feature extraction                | algorithm           |
| image linear discriminant analysis                                                                                            | feature extraction                | algorithm           |
| image singular value decomposition                                                                                            | feature extraction                | algorithm           |
| text non-negative matrix factorization                                                                                        | feature extraction                | algorithm           |
| [MobileNet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) extractor                                        | feature extraction                | algorithm           |
| retrain [decision tree](https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier)                | model training                    | algorithm           |
| retrain [SVM](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC)                           | model training                    | algorithm           |
| retrain [logistic regression](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression)      | model training                    | algorithm           |
| retrain [RBN](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.BernoulliRBM) | model training                    | algorithm           |
| online graph-based label propagation                                                                                          | model training                    | algorithm           |
| one by one checking                                                                                                           | quality assurance                 | interface           |
| labeled rate                                                                                                                  | stoppage analysis                 | algorithm           |
| editable label category table                                                                                                 | label ideation                    | interface           |
:::

## Labeling Tool Templates

OneLabeler builds in a collection of template data labeling tools.
These templates can be used directly, or used as boilerplate for creating new data labeling tools.

The list of built-in templates:

- audio classification
- audio temporal segmentation
- image classification
- mixed-initiative image classification
- image segmentation
- point cloud classification
- point cloud segmentation
- text classification
- text named entity recognition
- video classification
- video temporal segmentation
- webpage classification
